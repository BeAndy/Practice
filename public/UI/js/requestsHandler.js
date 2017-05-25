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

  function getArticlesSync(skip, top, filter) {
    req.open('GET', `/articles?top=${top}&skip=${skip}&${convert(filter)}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const articles = JSON.parse(req.responseText);
    articles.forEach((currentArticle) => {
      currentArticle.createdAt = new Date(currentArticle.createdAt);
    });
    return articles;
  }

  function getArticles(skip, top, filter) {
    return new Promise((resolve, reject) => {
      req.open('GET', `/articles?top=${top}&skip=${skip}&${convert(filter)}`);
      req.setRequestHeader('content-type', 'application/json');
      req.send();
      req.onload = function load() {
        if (this.status === 200) {
          const articles = JSON.parse(req.responseText);
          if (Array.isArray(articles)) {
            articles.forEach((currentArticle) => {
              currentArticle.createdAt = new Date(currentArticle.createdAt);
            });
          }
          resolve(articles);
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

  function getArticlesNumber() {
    req.open('GET', '/articlesNumber', false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    return req.responseText;
  }

  function editArticle(id, article) {
    return new Promise((resolve, reject) => {
      req.open('PUT', `/article/${id}`);
      req.setRequestHeader('content-type', 'application/json');
      req.send(JSON.stringify(article));
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
    });
  }

  function getArticleSync(id) {
    req.open('GET', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const article = JSON.parse(req.responseText);
    article.createdAt = new Date(article.createdAt);
    return article;
  }

  function getArticle(id) {
    return new Promise((resolve, reject) => {
      req.open('GET', `/article/${id}`);
      req.setRequestHeader('content-type', 'application/json');
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

  function logIn(user) {
    return new Promise((resolve, reject) => {
      req.open('POST', '/login');
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify(user));
      req.onload = function load() {
        if (this.status === 200) {
          resolve(req.responseText);
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
    });
  }

  function logOut() {
    return new Promise((resolve, reject) => {
      req.open('GET', '/logout');
      req.send();
      req.onload = function load() {
        if (this.status === 200) {
          resolve();
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
    });
  }

  return {
    getArticlesNumber,
    getArticles,
    getArticlesSync,
    getArticle,
    deleteArticle,
    addArticle,
    editArticle,
    getArticleSync,
    logIn,
    logOut,
  };
}());
