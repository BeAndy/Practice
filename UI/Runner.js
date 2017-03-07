
/**
 * Created by Andrew on 3/6/2017.
 */

var tags = ['USA', 'Russia', 'Minsk'];

var articles = [
    {
        id: '1',
        title: 'Минское «Динамо» обыграло ярославский «Локомотив»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:40:10'),
        tags: ['USA', 'Russia'],
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
    },
    {
        id: '2',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:11:00'),
        tags: ['USA', 'Russia'],
        author: 'Иванов Колян',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '3',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2016-02-27T12:10:00'),
        tags: ['USA', 'Minsk'],
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '4',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T13:10:40'),
        tags: ['USA', 'Russia'],
        author: 'Иванов Колян',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '5',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:14:15'),
        tags: ['USA', 'Russia'],
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '6',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:11:15'),
        tags: ['USA', 'Russia'],
        author: 'Иванов Иван',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '7',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:45'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '8',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:30'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '9',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T22:11:00'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '10',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T13:10:10'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '11',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T20:10:30'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '12',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-01-27T23:10:22'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '13',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:33'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '14',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:44'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '15',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:55'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '16',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:10:09'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '17',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:14:00'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '18',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-01-27T23:15:00'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '19',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:16:00'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    },
    {
        id: '20',
        title: 'Минское «Динамо» обыграло ярославский «Зубр»',
        summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
        createdAt: new Date('2017-02-27T23:17:00'),
        tags: ['USA', 'Russia'],
        author: 'Петров Дмитрий',
        content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'

    }
];

function validateArticle(article) {
    try {
        var isArticle = !isNaN(article.id);
        if (typeof article.title !== "string" || article.title.length > 100) {
            isArticle = false;
        }
        if (typeof article.summary !== "string" || article.summary.length > 200) {
            isArticle = false;
        }
        if (typeof article.author !== "string" || article.author.length < 1) {
            isArticle = false;
        }
        if (typeof article.content !== "string" || article.content.length < 1) {
            isArticle = false;
        }
        if (!article.createdAt instanceof Date) {
            isArticle = false;
        }
        if (article.tags.length == 0) {
            isArticle = false;
        }
        else {
            article.tags.forEach(function (currentTag) {
                if (tags.indexOf(currentTag) == -1) {
                    isArticle = false;
                }
            })
        }
        return isArticle;
    }
    catch (error) {
        console.log('Invalid article');
        return false;
    }
}

function getArticle(id) {
    var resultArticle = null;
    articles.forEach(function (currentArticle) {
        if (currentArticle.id == id) {
            resultArticle = currentArticle;
        }
    });
    return resultArticle;
}

function addArticle(article) {
    var isAdded = true;
    if (!validateArticle(article)) {
        isAdded = false;
    }
    else {
        articles.push(article);
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
    try {
        var currentArticle = getArticle(id);
        var removeIndex=articles.indexOf(currentArticle);
        var articleCopy = copyObject(currentArticle);
        var isEdited = true;
        for (var key in article) {
            if (articleCopy.hasOwnProperty(key))
                articleCopy[key] = article[key];
        }
        if (!validateArticle(articleCopy)) {
            isEdited = false;
        }
        else {
            articles[removeIndex] = articleCopy;
        }
        return isEdited;
    }
    catch (ex) {
        console.log("Invalid ID");
    }
}

function compareDate(first, second) {
    return first.createdAt > second.createdAt ? 1 : -1;
}

function getArticles(skip, top, filterConfig) {
    var resultArticles = [];
    try {
        if (filterConfig == null || Object.keys(filterConfig).length == 0) {
            skip = typeof skip !== 'undefined' ? skip : 0;
            top = typeof top !== 'undefined' ? top : articles.length;
            resultArticles = articles.sort(compareDate).slice(skip, top);
        }
        else {
            for (var key in filterConfig) {
                articles.forEach(function (currentArticle) {
                    if (currentArticle.hasOwnProperty(key) && currentArticle[key] == filterConfig[key])
                        resultArticles.push(currentArticle);
                })
            }
            resultArticles.sort(compareDate);
            skip = typeof skip !== 'undefined' ? skip : 0;
            top = typeof top !== 'undefined' ? top : resultArticles.length;
            resultArticles = resultArticles.slice(skip, top);

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
    if (articleToDelete == null) {
        isRemoved = false;
    }
    else {
        articles.splice(articles.indexOf(articleToDelete), 1);
    }
    return isRemoved;
}

function addTag(tag) {
    if (tags.indexOf(tag) == -1) {
        tags.push(tag);
    }
}

function removeTag(tag) {
    if (tags.indexOf(tag) != -1) {
        tags.splice(articles.indexOf(tag), 1);
    }
}

var articleToChange = {
    author: 'New author',
    content: 'New content'
};

var filterConfig = {
    author: 'Иванов Иван',
    id: '12'
};
var newArticle = {
    id: '24',
    title: 'Минское «Динамо» обыграло ярославский «Зубр»',
    summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
    createdAt: new Date('2017-02-27T23:10:54'),
    tags: ['USA', 'Russia'],
    author: 'Петров Дмитрий',
    content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
};

var invalidTagsArticle = {
    id: '30',
    title: 'Минское «Динамо» обыграло ярославский «Зубр»',
    summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
    createdAt: new Date('2017-02-27T23:10:54'),
    tags: ['USA', 'Russia','KIA'],
    author: 'Петров Дмитрий',
    content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
};
var validArticle = {
    id: '30',
    title: 'Минское «Динамо» обыграло ярославский «Зубр»',
    summary: 'Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2',
    createdAt: new Date('2017-02-27T23:10:54'),
    tags: ['USA', 'Minsk'],
    author: 'Петров Дмитрий',
    content: 'Гости создали больше опасных моментов и в два раза перебросали минчан, но «зубры» на этот раз очень эффективно использовали свои моменты.'
};


function logArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log('\n' + "------TEST:getArticles(skip?: number, top?: number, filterConfig?: Object): Array< Object>------");
console.log("------ALL ARTICLES:-------");
logArray(articles);
console.log('\n' + "------getArticles(0, 5,null)-------");
logArray(getArticles(0, 5, null));
console.log('\n' + "------getArticles(2, 5,null)-------");
logArray(getArticles(2, 5, null));
console.log('\n' + "------filterConfig-------");
console.log(filterConfig);
console.log('\n' + "------getArticles(0, 5,filterConfig)-------");
logArray(getArticles(0, 5, filterConfig));
console.log('\n' + "------getArticles(2, 5,filterConfig)-------");
logArray(getArticles(2, 5, filterConfig));



console.log('\n' + "------TEST: getArticle(id: string): Object -------");
console.log('\n' + "------getArticles(0)-------");
console.log(getArticle(0));
console.log('\n' + "------getArticles(12)-------");
console.log(getArticle(12));
console.log('\n' + "------getArticles('Hey!')-------");
console.log(getArticle('Hey!'));


console.log('\n' + "------TEST: addArticle(article: Object): boolean -------");
console.log('\n' + "------addArticles(null)-------");
console.log(addArticle(null));
console.log('\n' + "------addArticles('Hey!')-------");
console.log(addArticle('Hey!'));
console.log('\n' + "------article-------");
console.log(newArticle);
console.log('\n' + "------addArticles(article)-------");
console.log(addArticle(newArticle));
console.log("------ALL ARTICLES:-------");
logArray(articles);


console.log('\n' + "------TEST: editArticle(id:string, article: Object): boolean -------");
console.log('\n' + "------editArticle(200,articleToChange)-------");
editArticle(200, articleToChange);
console.log('\n' + "------editArticle(19,null)-------");
console.log(editArticle(19, null));
console.log(getArticle(19));
console.log('\n' + "------editArticle(19,articleToChange)-------");
console.log(articleToChange);
console.log(editArticle(19, articleToChange));
console.log(getArticle(19));

console.log('\n' + "------TEST: removeArticle(id: string): boolean  -------");
console.log('\n' + "------removeArticle(100500)-------");
console.log(removeArticle(100500));
console.log('\n' + "------removeArticle(24)-------");
console.log(removeArticle(24));
console.log("------ALL ARTICLES:-------");
logArray(articles);

console.log('\n' + "------TEST: validateArticle(article: Object): boolean   -------");
console.log('\n' + "------validateArticle(null) -------");
console.log(validateArticle(null));
console.log('\n' + "------TAGS -------");
console.log(tags);
console.log('\n' + "------validateArticle(invalidTagsArticle) -------");
console.log(validateArticle(invalidTagsArticle));
console.log(invalidTagsArticle);
console.log('\n' + "------validateArticle(validArticle) -------");
console.log(validateArticle(validArticle));
console.log(validArticle);
