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
   /* return new Promise((resolve, reject) => {
      console.log(`/articles?top=${top}&skip=${skip}&${convert(filter)}`);
      req.open('GET', `/articles?top=${top}&skip=${skip}&${convert(filter)}`, false);
      req.setRequestHeader('content-type', 'application/json');
      req.send();
      console.log('In getArticles!');
      req.onload = function load() {
        if (this.status === 200) {
          const articles = JSON.parse(req.responseText);
          console.log(articles);
          articles.forEach((currentArticle) => {
            currentArticle.createdAt = new Date(currentArticle.createdAt);
          });
          resolve(articles);
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
    });*/
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

  function getArticleSync(id) {
    req.open('GET', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const article = JSON.parse(req.responseText);
    article.createdAt = new Date(article.createdAt);
    console.log(article.author);
    return article;
  }

  function getArticle(id) {
    return new Promise((resolve, reject) => {
      req.open('GET', `/article/${id}`);
      req.send();
      req.onload = function load() {
        if (this.status === 200) {
          resolve(req.responseText);
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      req.onerror = function error() {
        reject(new Error('Network Error'));
      };
    });
  }

  function addArticle(article) {
    return new Promise((resolve, reject) => {
      req.open('POST', '/article');
      req.setRequestHeader('content-type', 'application/json');
      req.send(JSON.stringify(article));
      if (this.status === 200) {
        resolve();
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
      req.onerror = function error() {
        reject(new Error('Network Error'));
      };
    });
  }

  function deleteArticle(id) {
    return new Promise((resolve, reject) => {
      req.open('DELETE', `/articles/${id}`);
      req.setRequestHeader('content-type', 'application/json');
      req.onload = function load() {
        if (this.status === 200) {
          resolve();
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      req.onerror = function error() {
        reject(new Error('Network Error'));
      };
      req.send();
    });
  }

  return {
    getArticlesNumber,
    getArticles,
    getArticle,
    deleteArticle,
    addArticle,
    editArticle,
    getArticleSync,
  };
}());
