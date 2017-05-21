/* global document requestsHandler Option event // app*/

let user = 'BeAndy';
let loadedArticles = 8;
let filter = null;
let lastID = new Date() / 1000;
let tagsLoaded = false;
console.log(lastID);

function getById(currentId) {
  return document.getElementById(currentId);
}

function select(obj, element) {
  return obj.querySelector(element);
}

const articleModel = (function () {
  const tags = [
    'USA',
    'Russia',
    'Minsk',
    'GCHQ',
    'EU',
    'Prince',
    'Fillon',
    'Kim',
    'SK',
    'Turkey',
  ];

  function validateArticle(article) {
    let isArticle = !isNaN(article.id);
    if (article.title.length > 100) {
      isArticle = false;
    }
    if (article.summary.length > 200) {
      isArticle = false;
    }
    if (article.author.length < 1) {
      isArticle = false;
    }
    if (article.content.length < 1) {
      isArticle = false;
    }
    if (!(article.createdAt instanceof Date)) {
      isArticle = false;
    }
    if (article.tags.length === 0) {
      isArticle = false;
    } else {
      article.tags.forEach((currentTag) => {
        if (tags.indexOf(currentTag) === -1) {
          isArticle = false;
        }
      });
    }
    return isArticle;
  }

  function getTags() {
    return tags;
  }

  function getArticle(id) {
    requestsHandler.getArticle(id).then((result) => {
      const article = JSON.parse(result);
      article.createdAt = new Date(article.createdAt);
      return article;
    });
  }
  function addArticle(article) {
    return new Promise((resolve) => {
      let isAdded = true;
      if (!validateArticle(article)) {
        isAdded = false;
      } else {
        article.id = article.id.toString();
        requestsHandler.addArticle(article);
        resolve(isAdded);
      }
    });
  }

  function copyObject(obj) {
    if (obj == null) return obj;
    const copy = obj.constructor();
    Object.keys(obj).forEach((attr) => {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        copy[attr] = obj[attr];
      }
    });
    return copy;
  }

  function removeArticle(id) {
    requestsHandler.deleteArticle(id);
  }

  function editArticle(id, article) {
    let isEdited = true;
    const currentArticle = requestsHandler.getArticleSync(id);
    currentArticle.createdAt = new Date(currentArticle.createdAt);
    const articleCopy = copyObject(currentArticle);
    removeArticle(currentArticle.id);
    Object.keys(article).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(articleCopy, key)) {
        articleCopy[key] = article[key];
      }
    });
    if (!validateArticle(articleCopy)) {
      isEdited = false;
      requestsHandler.addArticle(currentArticle);
    } else {
      articleCopy.id = articleCopy.id.toString();
      requestsHandler.addArticle(articleCopy);
    }
    return isEdited;
  }

  function addTag(tag) {
    if (tags.indexOf(tag) === -1) {
      tags.push(tag);
    }
  }

  return {
    validateArticle,
    getArticle,
    addArticle,
    editArticle,
    removeArticle,
    addTag,
    getTags,
  };
}());

const articleRenderer = (function () {
  let TEMPLATE;
  let node;

  function init() {
    TEMPLATE = getById('post-template');
    node = getById('article-list');
  }

  function formatDate(d) {
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  }
  const renderArticle = function (article, articles) {
    TEMPLATE = getById('post-template');
    const articleWrap = select(TEMPLATE, '.main-wrap').cloneNode(true);
    const post = select(articleWrap, '.main');
    let column = select(post, '.left-top');
    let articleIndex = articles.indexOf(article);

    column.id = article.id;
    if (user !== null) {
      select(column, '.control-buttons').style.visibility = 'visible';
    }
    select(column, '.head-left').innerHTML = article.title;
    select(column, '.text-left').innerHTML = article.summary;
    select(column, '.tags-left-top').innerHTML = article.tags;
    select(column, '.author').innerHTML = article.author;
    select(column, '.time').innerHTML = formatDate(article.createdAt);
    article = articles[++articleIndex];

    column = select(post, '.left-bottom');
    column.id = article.id;
    if (user !== null) {
      select(column, '.control-buttons').style.visibility = 'visible';
    }
    select(column, '.head-left').innerHTML = article.title;
    select(column, '.text-left').innerHTML = article.summary;
    select(column, '.tags-left-top').innerHTML = article.tags;
    select(column, '.author').innerHTML = article.author;
    select(column, '.time').innerHTML = formatDate(article.createdAt);

    article = articles[++articleIndex];
    column = select(post, '.central');
    column.id = article.id;
    if (user !== null) {
      select(column, '.control-buttons').style.visibility = 'visible';
    }
    select(column, '.img-central').src = article.imageSrc;
    select(column, '.head-central').innerHTML = article.title;
    select(column, '.text-central').innerHTML = article.summary;
    select(column, '.center').innerHTML = article.tags;
    select(column, '.author-center').innerHTML = article.author;
    select(column, '.time').innerHTML = formatDate(article.createdAt);

    article = articles[++articleIndex];
    column = select(post, '.right');
    column.id = article.id;
    if (user !== null) {
      select(column, '.control-buttons').style.visibility = 'visible';
    }
    select(column, '.img-right').src = article.imageSrc;
    select(column, '.head-right').innerHTML = article.title;
    select(column, '.text-right').innerHTML = article.summary;
    select(column, '.tags-left-top').innerHTML = article.tags;
    select(column, '.author').innerHTML = article.author;
    select(column, '.time').innerHTML = formatDate(article.createdAt);
    return articleWrap;
  };

  const renderSinglePost = function (article) {
    TEMPLATE = getById('post-template-single');
    const postWrap = select(TEMPLATE, '.main-single-wrap').cloneNode(true);
    const post = select(postWrap, '.main-single');
    const column = select(post, '.left-single');

    column.id = article.id;
    if (user !== null) {
      select(column, '.control-buttons').style.visibility = 'visible';
    }
    select(column, '.head-single').innerHTML = article.title;
    select(column, '.text-single').innerHTML = article.summary;
    select(column, '.tags-left-top').innerHTML = article.tags;
    select(column, '.author').innerHTML = article.author;
    select(column, '.time').innerHTML = formatDate(article.createdAt);
    return postWrap;
  };

  function renderArticlesAsync(articles) {
    const remainder = articles.length % 4;
    for (let i = 0; i < articles.length - remainder; i += 4) {
      node.appendChild(renderArticle(articles[i], articles));
    }
    for (let i = remainder; i > 0; i--) {
      node.appendChild(renderSinglePost(articles[articles.length - i]));
    }
  }

  function renderArticles() {
    const articles = requestsHandler.getArticlesSync(0, loadedArticles, filter);
    const remainder = articles.length % 4;
    for (let i = 0; i < articles.length - remainder; i += 4) {
      node.appendChild(renderArticle(articles[i], articles));
    }
    for (let i = remainder; i > 0; i--) {
      node.appendChild(renderSinglePost(articles[articles.length - i]));
    }
  }

  function renderHeader() {
    if (user !== null) {
      select(document, '.login-bar').lastElementChild.innerHTML = user;
      select(document, '.button-sign').innerHTML = 'Sign out';
      select(document, '.button-add').style.visibility = 'visible';
    } else {
      select(document, '.login-bar').lastElementChild.innerHTML = 'Welcome!';
      select(document, '.button-sign').innerHTML = 'Sign in';
      select(document, '.button-add').style.visibility = 'hidden';
    }
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function removeOptions(selectBox) {
    for (let i = selectBox.options.length - 1; i >= 0; i--) {
      selectBox.remove(i);
    }
  }

  function createCheckbox(parentDiv, id, text) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('class', 'tag-box');
    checkbox.value = text;
    checkbox.id = id;
    parentDiv.appendChild(checkbox);
    const label = document.createElement('Label');
    label.setAttribute('for', id);
    label.innerHTML = text;
    parentDiv.appendChild(label);
    if (id % 3 === 0) {
      parentDiv.appendChild(document.createElement('br'));
    }
  }

  function renderFilter() {
    const articles = requestsHandler.getArticlesSync(0, null, null);
    const authorArray = [];
    for (let i = 0; i < articles.length; i++) {
      authorArray.push(articles[i].author);
    }
    const unique = authorArray.filter(onlyUnique);
    const master = select(document, '.filter');
    removeOptions(master);
    for (let i = 0; i < unique.length; i++) {
      if (i === 0) {
        master.options[master.options.length] = new Option(
          'Any',
          'any',
          true,
          false);
      }
      master.options[master.options.length] = new Option(
        unique[i],
        'value',
        true,
        false);
    }
    if (!tagsLoaded) {
      let tagsId = 1;
      articleModel.getTags().forEach((currentTag) => {
        const tagsDiv = select(document, '.tag-cloud');
        createCheckbox(tagsDiv, tagsId++, currentTag);
      });
      tagsLoaded = true;
    }
  }

  function removeArticlesFromDom() {
    getById('article-list').innerHTML = '';
  }

  function insertArticleInDom(article) {
    articleModel.addArticle(article).then(() => {
      requestsHandler.getArticles(0, loadedArticles, filter).then((res) => {
        removeArticlesFromDom();
        renderFilter();
        renderArticlesAsync(res);
      });
    });
  }

  function removeArticleFromDom(id) {
    requestsHandler.deleteArticle(id).then(() => {
      requestsHandler.getArticles(0, loadedArticles, filter).then((res) => {
        removeArticlesFromDom();
        renderArticlesAsync(res);
      });
    });
  }

  function editArticleInDom(id, article) {
    articleModel.editArticle(id, article);
    removeArticlesFromDom();
    renderFilter();
    renderArticles();
  }

  return {
    formatDate,
    init,
    renderArticles,
    renderArticlesAsync,
    renderHeader,
    renderFilter,
    insertArticleInDom,
    removeArticleFromDom,
    removeArticlesFromDom,
    editArticleInDom,
  };
}());

function searchArticles() {
  if (event.keyCode === 13) {
    const searchInfo = getById('search').value;
    if (searchInfo) {
      const currentConfig = {
        author: '',
        createdAt: '',
        tags: [],
        title: '',
      };
      currentConfig.title = searchInfo;
      filter = currentConfig;
      articleRenderer.removeArticlesFromDom();
      articleRenderer.renderArticles();
    }
  }
}
function showMoreArticles() {
  const articlesNumber = requestsHandler.getArticlesNumber();
  loadedArticles += 4;
  while (loadedArticles > articlesNumber) {
    loadedArticles--;
  }
  requestsHandler.getArticles(0, loadedArticles, filter).then((res) => {
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderArticlesAsync(res);
  });
}

function enableBody() {
  const body = document.body;
  body.classList.toggle('no-scroll', false);
}

function insertEditedArticle() {
  const currentID = Number(getById('change-news-id').innerHTML);
  const newArticle = {
    title: getById('change-news-head').value,
    summary: getById('change-news-text').value.substr(0, 190),
    tags: getById('change-news-tags').value.split(','),
    author: getById('change-news-author').value,
    content: getById('change-news-text').value,
    imageSrc: getById('change-news-img-url').value,
  };
  articleRenderer.editArticleInDom(currentID, newArticle);
  getById('change').style.display = 'none';
  enableBody();
}
function saveArticle() {
  lastID++;
  const newArticle = {
    id: lastID,
    title: getById('new-news-head').value,
    summary: getById('new-news-text').value.substr(0, 190),
    createdAt: new Date(),
    tags: getById('new-news-tags').value.split(' '),
    author: getById('new-news-author').value,
    content: getById('new-news-text').value,
    imageSrc: getById('new-news-img-url').value,
  };
  articleRenderer.insertArticleInDom(newArticle);
  getById('create').style.display = 'none';
  enableBody();
}
function getName(event) {
  return event.target.className;
}

function viewArticle(articleId) {
  requestsHandler.getArticle(articleId).then((result) => {
    const article = JSON.parse(result);
    article.createdAt = new Date(article.createdAt);
    const date = article.createdAt;

    getById('view').style.display = 'block';
    document.body.classList.toggle('no-scroll', true);
    select(document, '.vew-author-text').innerHTML = article.author;
    select(document, '.vew-time-text').innerHTML = article.createdAt;
    select(document, '.vew-tag-text').innerHTML = article.tags.join();
    select(document, '.vew-time-text').innerHTML = articleRenderer.formatDate(date);
    select(document, '.view-head').innerHTML = article.title;
    select(document, '.img-view').src = article.imageSrc;
    select(document, '.view-text-content').innerHTML = article.content;
  });
}

function saveEditedArticle(articleId) {
  requestsHandler.getArticle(articleId).then((result) => {
    const article = JSON.parse(result);
    article.createdAt = new Date(article.createdAt);
    getById('change').style.display = 'block';
    document.body.classList.toggle('no-scroll', true);
    getById('change-news-author').value = article.author;
    getById('change-news-tags').value = article.tags.join();
    getById('change-news-head').value = article.title;
    getById('change-news-id').innerHTML = article.id;
    getById('change-news-img-url').value = article.imageSrc;
    getById('change-news-text').value = article.content;
  });
}

function eventPost(event) {
  if (
    getName(event) === 'button-delete' ||
    getName(event) === 'button-delete-center'
  ) {
    let curEvent = event.target.parentElement;
    while (!curEvent.hasAttribute('id')) {
      curEvent = curEvent.parentElement;
    }
    const articleToDelete = Number(curEvent.getAttribute('id'));
    articleRenderer.removeArticleFromDom(articleToDelete);
  }
  if (getName(event) === 'read-more' || getName(event) === 'read-more-center') {
    let curEvent = event.target.parentElement;
    while (!curEvent.hasAttribute('id')) {
      curEvent = curEvent.parentElement;
    }
    const articleToView = Number(curEvent.getAttribute('id'));
    viewArticle(articleToView);
  }
  if (getName(event) === 'button-change') {
    let curEvent = event.target.parentElement;
    while (!curEvent.hasAttribute('id')) {
      curEvent = curEvent.parentElement;
    }
    const changeID = Number(curEvent.getAttribute('id'));
    saveEditedArticle(changeID);
  }
}

function checkLogin(log, pass) {
  if (log === 'admin' && pass === 'admin') {
    user = 'BeAndy';
    return true;
  }
  return false;
}

function inputCheck() {
  const inputUser = getById('username').value;
  const inputPass = getById('password').value;
  if (checkLogin(inputUser, inputPass)) {
    getById('login-template').style.display = 'none';
    articleRenderer.removeArticlesFromDom();
    articleRenderer.renderHeader();
    articleRenderer.renderFilter();
    articleRenderer.renderArticles();
  } else {
    alert('So sorry =/');
  }
}

function logOut() {
  user = null;
  articleRenderer.removeArticlesFromDom();
  articleRenderer.renderHeader();
  articleRenderer.renderFilter();
  articleRenderer.renderArticles();
}

function userStatus() {
  if (user !== null) {
    logOut();
  } else {
    getById('login-template').style.display = 'block';
  }
}

function clearFilter() {
  getById('filter').style.display = 'none';
  loadedArticles = 8;
  filter = null;
  articleRenderer.removeArticlesFromDom();
  articleRenderer.renderArticles();
}

function applyFilter() {
  const author = getById('author-filter');
  const date = getById('date-filter').value;
  const tags = document.querySelectorAll('.tag-box');
  const currentAuthor = author.options[author.selectedIndex].innerHTML;

  const config = {
    author: '',
    createdAt: '',
    tags: [],
  };
  config.author = currentAuthor === 'Any' ? null : currentAuthor;
  if (date) {
    config.createdAt = new Date(date);
  } else {
    config.createdAt = '';
  }

  tags.forEach((currentTag) => {
    if (currentTag.checked) {
      config.tags.push(currentTag.value);
    }
  });
  getById('filter').style.display = 'none';
  loadedArticles = 8;
  filter = config;
  articleRenderer.removeArticlesFromDom();
  articleRenderer.renderArticles();
}
function addEventListeners() {
  const postListNodes = getById('article-list');
  postListNodes.addEventListener('click', eventPost);
  const login = getById('submit');
  login.addEventListener('click', inputCheck);

  const sign = select(document, '.button-sign');
  sign.addEventListener('click', userStatus);
  const save = select(document, '.button-save');
  save.addEventListener('click', saveArticle);

  const saveChanges = select(document, '.button-save-change');
  saveChanges.addEventListener('click', insertEditedArticle);
  const pagination = select(document, '.show-more');
  pagination.addEventListener('click', showMoreArticles);

  const filterApply = getById('apply');
  filterApply.addEventListener('click', applyFilter);
  const filterClear = getById('clear');
  filterClear.addEventListener('click', clearFilter);

  const search = getById('search');
  search.addEventListener('keypress', searchArticles);
  const logo = select(document, '.img-inNews');
  logo.addEventListener('click', clearFilter);
}

function startApp() {
  articleRenderer.init();
  articleRenderer.renderHeader();
  articleRenderer.renderFilter();
  articleRenderer.renderArticles();
}

document.addEventListener('DOMContentLoaded', startApp);
addEventListeners();
