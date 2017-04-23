/* global XMLHttpRequest reject*/
const requestsHandler = (function get() {
  const req = new XMLHttpRequest();
  function getArticles() {
    req.open('GET', '/articles', false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const articles = JSON.parse(req.responseText);
    articles.forEach((currentArticle) => {
      currentArticle.createdAt = new Date(currentArticle.createdAt);
    });
    return articles;
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
    getArticles,
    getArticle,
    deleteArticle,
    addArticle,
    editArticle,
  };
}());
