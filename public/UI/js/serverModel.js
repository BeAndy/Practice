/* global document requestsHandler Option event alert app*/
const serverModel = (function get() {
  function getArticle(id) {
    requestsHandler.getArticle(id).then((result) => {
      const article = JSON.parse(result);
      article.createdAt = new Date(article.createdAt);
      alert('From SM!:' + result);
      return article;
    });
  }

 /*function addArticle(article) {
    req.open('POST', '/article', true);
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
*/
  return {
    getArticle,
  };
}());
