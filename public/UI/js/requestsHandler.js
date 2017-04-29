/* global XMLHttpRequest reject*/
const requestsHandler = (function get() {
  const req = new XMLHttpRequest();

  function convert(obj) {
    const resultString = [];
    if (!obj) {
      return resultString;
    }
    Object.keys(obj).forEach(key =>
      resultString.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`));
    return resultString.join('&');
  }

  function getArticles(skip, top, filter) {
    console.log(`/articles?top=${top}&skip=${skip}&${convert(filter)}`);
    req.open('GET', `/articles?top=${top}&skip=${skip}&${convert(filter)}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const articles = JSON.parse(req.responseText);
    articles.forEach((currentArticle) => {
      currentArticle.createdAt = new Date(currentArticle.createdAt);
    });
    return articles;
  }

  function getArticlesNumber() {
    req.open('GET', '/articlesNumber', false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    return req.responseText;
  }

  function editArticle(id, article) {
    req.open('PUT', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send(JSON.stringify(article));
  }

  function getArticle(id) {
    req.open('GET', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const article = JSON.parse(req.responseText);
    article.createdAt = new Date(article.createdAt);
    console.log(article.author);
    return article;
  }

  function addArticle(article) {
    req.open('POST', '/article', false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send(JSON.stringify(article));
  }

  function deleteArticle(id) {
    req.open('DELETE', `/articles/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send();
  }

  return {
    getArticlesNumber,
    getArticles,
    getArticle,
    deleteArticle,
    addArticle,
    editArticle,
  };
}());
