/* global document requestsHandler Option authorization event // app*/
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
