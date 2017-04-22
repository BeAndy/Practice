/**
 * Created by Andrew on 3/6/2017.
 */

var user = 'BeAndy';
var amountLoadedArticles = 8;
var filterConfig = null;
var lastID = 12;
var tagsLoaded = false;

var articleModel = (function () {
    var tags = ['USA', 'Russia', 'Minsk', 'GCHQ', 'EU', 'Prince', 'Fillon', 'Kim', 'SK', 'Turkey'];
    var articles = requestsHandler.getArticles().slice();

    function validateArticle(article) {
        try {
            var isArticle = !isNaN(article.id);
            console.log(isArticle);

            if (typeof article.title !== "string" || article.title.length > 100) {
                isArticle = false;
            }
            console.log(isArticle);
            if (typeof article.summary !== "string" || article.summary.length > 200) {
                isArticle = false;
            }
            console.log(isArticle);
            if (typeof article.author !== "string" || article.author.length < 1) {
                isArticle = false;
            }
            console.log(isArticle);
            if (typeof article.content !== "string" || article.content.length < 1) {
                isArticle = false;
            }
            console.log(isArticle);
            if (!(article.createdAt instanceof Date)) {
                isArticle = false;
            }
            console.log(isArticle);
            if (article.tags.length === 0) {
                isArticle = false;
                console.log(isArticle);
            }
            else {
                article.tags.forEach(function (currentTag) {
                    if (tags.indexOf(currentTag) === -1) {
                        isArticle = false;
                    }
                })
            }
            console.log(isArticle);
            for (var i = 0; i < articles.length; i++) {
                if (articles[i] !== null) {
                    if (articles[i].id === article.id) {
                        isArticle = false;
                    }
                }
            }
            console.log(isArticle);
            return isArticle;
        }
        catch (error) {
            console.log('Invalid article');
            return false;
        }
    }

    function getTags() {
        return tags;
    }

    function getArticlesArray() {
        return articles;
    }

    function getArticle(id) {
        return requestsHandler.getArticle(id);
    }

    function addArticle(article) {
        var isAdded = true;
        if (!validateArticle(article)) {
            isAdded = false;
        }
        else {
            article.id = article.id.toString();
            requestsHandler.addArticle(article);
            articles = requestsHandler.getArticles();
        }
        return isAdded;
    }

    function copyObject(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }

    function editArticle(id, article) {
        var currentArticle = getArticle(id);
        var removeIndex = articles.indexOf(currentArticle);
        var articleCopy = copyObject(currentArticle);
        var isEdited = true;
        removeArticle(currentArticle.id);
        for (var key in article) {
            if (articleCopy.hasOwnProperty(key)) {
                articleCopy[key] = article[key];
            }
        }
        if (!validateArticle(articleCopy)) {
            isEdited = false;
            requestsHandler.addArticle(currentArticle);
            articles = requestsHandler.getArticles();
        }
        else {
            articleCopy.id = articleCopy.id.toString();
            requestsHandler.addArticle(articleCopy);
            articles = requestsHandler.getArticles();
        }
        console.log('Validate:' + validateArticle(articleCopy));
        return isEdited;
    }

    function compareDate(first, second) {
        return first.createdAt < second.createdAt ? 1 : -1;
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || articles.length;
        var resultArticles = articles.sort(compareDate).slice(skip, top);
        try {
            if (filterConfig !== null) {
                if (filterConfig.createdAt)
                    resultArticles = resultArticles.filter(function (currentArticle) {
                        var isValid = currentArticle.createdAt.getFullYear() === filterConfig.createdAt.getFullYear();
                        isValid = isValid & currentArticle.createdAt.getMonth() === filterConfig.createdAt.getMonth();
                        isValid = isValid & currentArticle.createdAt.getDate() === filterConfig.createdAt.getDate();
                        return isValid;
                    });
                if (filterConfig.author)
                    resultArticles = resultArticles.filter(function (currentArticle) {
                        return currentArticle.author.toLowerCase() === filterConfig.author.toLowerCase();
                    });
                if (filterConfig.tags) {
                    resultArticles = resultArticles.filter(function (currentArticle) {
                        return filterConfig.tags.every(function (currentTag) {
                            return currentArticle.tags.join(" ").indexOf(currentTag) !== -1;
                        });
                    });
                }
                if (filterConfig.title) {
                    resultArticles = resultArticles.filter(function (currentArticle) {
                        return currentArticle.title.includes(filterConfig.title);
                    });
                }
                resultArticles.sort(compareDate);
            }
        }
        catch (ex) {
            console.log("Input error");
        }
        return resultArticles;
    }

    function removeArticle(id) {
        var isRemoved = true;
        var articleToDelete = getArticle(id);
        if (articleToDelete === null) {
            isRemoved = false;
        }
        else {
            requestsHandler.deleteArticle(id);
            articles = requestsHandler.getArticles().slice();
        }
        return isRemoved;
    }

    function addTag(tag) {
        if (tags.indexOf(tag) === -1) {
            tags.push(tag);
        }
    }

    function removeTag(tag) {
        if (tags.indexOf(tag) !== -1) {
            tags.splice(articles.indexOf(tag), 1);
        }
    }
    return {
        getArticles: getArticles,
        validateArticle: validateArticle,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        removeArticle: removeArticle,
        addTag: addTag,
        removeTag: removeTag,
        getTags: getTags,
        getArticlesArray: getArticlesArray
    };
}());
var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.getElementById('post-template');
        ARTICLE_LIST_NODE = document.getElementById('article-list');
    }

    var renderArticle = function (article, articles) {
        var articleWrap = ARTICLE_TEMPLATE.querySelector('.main-wrap').cloneNode(true);
        var post = articleWrap.querySelector('.main');

        var articleIndex = articles.indexOf(article);
        var column = post.querySelector('.left-top');
        column.id = article.id;
        if (user !== null)
            column.querySelector('.control-buttons').style.visibility = 'visible';
        column.querySelector('.head-left').innerHTML = article.title;
        column.querySelector('.text-left').innerHTML = article.summary;
        column.querySelector('.tags-left-top').innerHTML = article.tags;
        column.querySelector('.author').innerHTML = article.author;
        column.querySelector('.time').innerHTML = formatDate(article.createdAt);


        if ((article = articles[++articleIndex]) !== null) {
            column = post.querySelector('.left-bottom');
            column.id = article.id;
            if (user !== null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.head-left').innerHTML = article.title;
            column.querySelector('.text-left').innerHTML = article.summary;
            column.querySelector('.tags-left-top').innerHTML = article.tags;
            column.querySelector('.author').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }

        if ((article = articles[++articleIndex]) !== null) {
            column = post.querySelector('.central');
            column.id = article.id;
            if (user !== null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.img-central').src = article.imageSrc;
            column.querySelector('.head-central').innerHTML = article.title;
            column.querySelector('.text-central').innerHTML = article.summary;
            column.querySelector('.center').innerHTML = article.tags;
            column.querySelector('.author-center').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }
        if ((article = articles[++articleIndex]) !== null) {
            column = post.querySelector('.right');
            column.id = article.id;
            if (user !== null)
                column.querySelector('.control-buttons').style.visibility = 'visible';
            column.querySelector('.img-right').src = article.imageSrc;
            column.querySelector('.head-right').innerHTML = article.title;
            column.querySelector('.text-right').innerHTML = article.summary;
            column.querySelector('.tags-left-top').innerHTML = article.tags;
            column.querySelector('.author').innerHTML = article.author;
            column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        }
        return articleWrap;
    };

    var renderArticleSinglePost = function (article) {
        var ARTICLE_TEMPLATE = document.getElementById('post-template-single');
        var postWrap = ARTICLE_TEMPLATE.querySelector('.main-single-wrap').cloneNode(true);
        var post = postWrap.querySelector('.main-single');
        var column = post.querySelector('.left-single');
        column.id = article.id;

        if (user !== null)
            column.querySelector('.control-buttons').style.visibility = 'visible';
        column.querySelector('.head-single').innerHTML = article.title;
        column.querySelector('.text-single').innerHTML = article.summary;
        column.querySelector('.tags-left-top').innerHTML = article.tags;
        column.querySelector('.author').innerHTML = article.author;
        column.querySelector('.time').innerHTML = formatDate(article.createdAt);
        return postWrap;
    };

    function formatDate(d) {
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    function renderArticles() {
        var articles = articleModel.getArticles(0, amountLoadedArticles, filterConfig);
        var remainder = articles.length % 4;
        for (var i = 0; i < articles.length - remainder; i += 4) {
            ARTICLE_LIST_NODE.appendChild(renderArticle(articles[i], articles));
        }
        for (i = remainder; i > 0; i--) {
            ARTICLE_LIST_NODE.appendChild(renderArticleSinglePost(articles[articles.length - i]));
        }
    }

    function renderHeader() {
        if (user !== null) {
            document.querySelector('.login-bar').lastElementChild.innerHTML = user;
            document.querySelector('.button-sign').innerHTML = 'Sign out';
            document.querySelector('.button-add').style.visibility = 'visible';
        }
        else {
            document.querySelector('.login-bar').lastElementChild.innerHTML = 'Welcome!';
            document.querySelector('.button-sign').innerHTML = 'Sing in';
            document.querySelector('.button-add').style.visibility = 'hidden';

        }
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    function removeOptions(selectBox) {
        for (var i = selectBox.options.length - 1; i >= 0; i--) {
            selectBox.remove(i);
        }
    }

    function createCheckbox(parentDiv, id, text) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute("class", 'tag-box');
        checkbox.value = text;
        checkbox.id = id;
        parentDiv.appendChild(checkbox);
        var label = document.createElement("Label");
        label.setAttribute("for", id);
        label.innerHTML = text;
        parentDiv.appendChild(label);
        if (id % 3 === 0) {
            parentDiv.appendChild(document.createElement('br'));
        }
    }

    function renderFilter() {
        var articles = articleModel.getArticles(0, null, null);
        var authorArray = [];
        for (var i = 0; i < articles.length; i++) {
            authorArray.push(articles[i].author);
        }
        var unique = authorArray.filter(onlyUnique);
        var master = document.querySelector('.filter');
        removeOptions(master);
        for (i = 0; i < unique.length; i++) {
            if (i === 0) {
                master.options[master.options.length] = new Option("Any", "any", true, false);
            }
            master.options[master.options.length] = new Option(unique[i], "value", true, false);
        }
        if (!tagsLoaded) {
            var tagsID = 1;
            articleModel.getTags().forEach(function (currentTag) {
                var tagsDiv = document.querySelector('.tag-cloud');
                createCheckbox(tagsDiv, tagsID++, currentTag);
            });
            tagsLoaded = true;
        }

    }

    function insertArticleInDom(article) {
        articleModel.addArticle(article);
        removeArticlesFromDom();
        renderArticles();
        renderFilter();

    }

    function removeArticlesFromDom() {
        document.getElementById('article-list').innerHTML = '';
    }

    function removeArticleFromDom(id) {
        articleModel.removeArticle(id);
        removeArticlesFromDom();
        renderArticles();
        renderFilter();
    }

    function editArticleInDom(id, article) {
        articleModel.editArticle(id, article);
        removeArticlesFromDom();
        renderArticles();
        renderFilter();
    }

    return {
        formatDate: formatDate,
        init: init,
        renderArticles: renderArticles,
        renderHeader: renderHeader,
        renderFilter: renderFilter,
        insertArticleInDom: insertArticleInDom,
        removeArticleFromDom: removeArticleFromDom,
        removeArticlesFromDom: removeArticlesFromDom,
        editArticleInDom: editArticleInDom
    };
}());

function addEventListeners() {
    var postListNodes = document.getElementById('article-list');
    postListNodes.addEventListener('click', eventPost);

    var login = document.getElementById('submit');
    login.addEventListener('click', inputCheck);

    var sign = document.querySelector('.button-sign');
    sign.addEventListener('click', userStatus);

    var save = document.querySelector('.button-save');
    save.addEventListener('click', saveArticle);

    var saveChanges = document.querySelector('.button-save-change');
    saveChanges.addEventListener('click', insertEditedArticle);

    var pagination = document.querySelector('.show-more');
    pagination.addEventListener('click', showMoreArticles);

    var filterApply = document.getElementById('apply');
    filterApply.addEventListener('click', applyFilter);

    var filterClear = document.getElementById('clear');
    filterClear.addEventListener('click', clearFilter);

    var search = document.getElementById('search');
    search.addEventListener('keypress', searchArticles);

    var logo = document.querySelector('.img-inNews');
    logo.addEventListener('click', clearFilter);

}

function searchArticles() {
    if (event.keyCode == 13) {
        var searchInfo = document.getElementById("search").value;
        if (searchInfo) {
            var currentConfig = {
                title: ''
            };
            currentConfig.title = searchInfo;
            filterConfig = currentConfig;
            articleRenderer.removeArticlesFromDom();
            articleRenderer.renderArticles();
        }
    }
}
function showMoreArticles() {
    amountLoadedArticles += 4;
    var articlesNumber = articleModel.getArticlesArray().length;
    while (amountLoadedArticles > articlesNumber) {
        amountLoadedArticles--;
    }
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderArticles();
}

function insertEditedArticle() {
    var currentID = parseInt(document.getElementById('change-news-id').innerHTML);
    var newArticle = {
        title: document.getElementById('change-news-head').value,
        summary: document.getElementById('change-news-text').value.substr(0, 190),
        tags: document.getElementById('change-news-tags').value.split(","),
        author: document.getElementById('change-news-author').value,
        content: document.getElementById('change-news-text').value,
        imageSrc: document.getElementById('change-news-img-url').value

    };
    console.log(newArticle.imageSrc);
    console.log(currentID);
    articleRenderer.editArticleInDom(currentID, newArticle);
    document.getElementById('change').style.display = "none";
    var body = document.body;
    body.classList.toggle('no-scroll', false);

}
function saveArticle() {
    lastID += 1;
    var newArticle = {
        id: lastID,
        title: document.getElementById('new-news-head').value,
        summary: document.getElementById('new-news-text').value.substr(0, 190),
        createdAt: new Date(),
        tags: document.getElementById('new-news-tags').value.split(" "),
        author: document.getElementById('new-news-author').value,
        content: document.getElementById('new-news-text').value,
        imageSrc: document.getElementById('new-news-img-url').value

    };
    articleRenderer.insertArticleInDom(newArticle);
    document.getElementById('create').style.display = "none";
    var body = document.body;
    body.classList.toggle('no-scroll', false);

}

function eventPost(event) {
    if ((event.target.className === "button-delete") || (event.target.className === "button-delete-center")) {
        var currentEvent = event.target.parentElement;
        while (!currentEvent.hasAttribute("id")) {
            currentEvent = currentEvent.parentElement;
        }
        var articleToDelete = parseInt(currentEvent.getAttribute('id'));
        articleRenderer.removeArticleFromDom(articleToDelete);
    }
    if ((event.target.className === "read-more") || (event.target.className === "read-more-center")) {
        var currentEvent = event.target.parentElement;
        while (!currentEvent.hasAttribute("id")) {
            currentEvent = currentEvent.parentElement;
        }
        var articleToView = parseInt(currentEvent.getAttribute('id'));
        viewArticle(articleToView);
    }
    if (event.target.className === "button-change") {
        var currentEvent = event.target.parentElement;
        while (!currentEvent.hasAttribute("id")) {
            currentEvent = currentEvent.parentElement;
        }
        var changeID = parseInt(currentEvent.getAttribute('id'));
        saveEditedArticle(changeID);
    }
}
function saveEditedArticle(articleId) {
    document.getElementById('change').style.display = 'block';
    document.body.classList.toggle('no-scroll', true);
    var currentArticle = articleModel.getArticle(articleId);
    document.getElementById('change-news-author').value = currentArticle.author;
    document.getElementById('change-news-tags').value = currentArticle.tags.join();
    document.getElementById('change-news-head').value = currentArticle.title;
    document.getElementById('change-news-id').innerHTML = currentArticle.id;
    document.getElementById('change-news-img-url').value = currentArticle.imageSrc;
    document.getElementById('change-news-text').value = currentArticle.content;


}

function viewArticle(articleId) {
    document.getElementById('view').style.display = 'block';
    document.body.classList.toggle('no-scroll', true);
    var currentArticle = articleModel.getArticle(articleId);
    document.querySelector('.vew-author-text').innerHTML = currentArticle.author;
    document.querySelector('.vew-time-text').innerHTML = currentArticle.createdAt;
    document.querySelector('.vew-tag-text').innerHTML = currentArticle.tags.join();
    document.querySelector('.vew-time-text').innerHTML = articleRenderer.formatDate(currentArticle.createdAt);
    document.querySelector('.view-head').innerHTML = currentArticle.title;
    document.querySelector('.img-view').src = currentArticle.imageSrc;
    document.querySelector('.view-text-content').innerHTML = currentArticle.content;


}
function userStatus() {
    if (user !== null) {
        logOut();
    }
    else {
        document.getElementById('login-template').style.display = 'block';
    }

}
function inputCheck() {
    var inputUser = document.getElementById('username').value;
    var inputPass = document.getElementById('password').value;
    if (checkLogin(inputUser, inputPass)) {
        document.getElementById('login-template').style.display = 'none';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.renderArticles();
        articleRenderer.renderHeader();
        articleRenderer.renderFilter();
    } else {
        alert("So sorry =/")
    }
}
function checkLogin(log, pass) {
    if (log === 'admin' && pass === 'admin') {
        user = 'BeAndy';
        return true;
    }
    return false;
}
function logOut() {
    user = null;
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderArticles();
    articleRenderer.renderHeader();
    articleRenderer.renderFilter();
}

function clearFilter() {
    document.getElementById('filter').style.display = 'none';
    amountLoadedArticles = 8;
    filterConfig = null;
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderArticles();
}
function applyFilter() {
    var authorFilter = document.getElementById('author-filter');
    var currentConfig = {
        author: "",
        createdAt: "",
        tags: []
    };
    var currentAuthor = authorFilter.options[authorFilter.selectedIndex].innerHTML;
    currentConfig.author = currentAuthor === 'Any' ? null : currentAuthor;
    var currentDate = document.getElementById('date-filter').value;
    if (currentDate) {
        currentConfig.createdAt = new Date(currentDate);
    }
    else {
        currentConfig.createdAt = "";
    }

    var tags = document.querySelectorAll('.tag-box');
    tags.forEach(function (currentTag) {
        if (currentTag.checked) {
            currentConfig.tags.push(currentTag.value);
        }
    });
    document.getElementById('filter').style.display = 'none';
    amountLoadedArticles = 8;
    filterConfig = currentConfig;
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderArticles();
}
document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    articleRenderer.init();
    articleRenderer.renderArticles();
    articleRenderer.renderHeader();
    articleRenderer.renderFilter();
}
addEventListeners();