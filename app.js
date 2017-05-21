const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('diskdb');

const app = express();
dataBase.connect('public/db', ['articles']);
app.use(express.static('public/UI'));
app.use(bodyParser.json());

function comparator(first, second) {
  return first.createdAt < second.createdAt ? 1 : -1;
}

function compareYear(first, second) {
  return new Date(first.createdAt).getFullYear() === second.createdAt.getFullYear();
}

function compareMonth(first, second) {
  return new Date(first.createdAt).getMonth() === second.createdAt.getMonth();
}

function compareDate(first, second) {
  return new Date(first.createdAt).getDate() === second.createdAt.getDate();
}

function filterArticles(skip, top, filter) {
  console.log('filter is here!');
  const articlesArray = dataBase.articles.find().filter((article) => {
    if (filter.tags) {
      for (let i = 0; i < filter.tags.length; i++) {
        if (article.tags.indexOf(filter.tags[i]) === -1) return false;
      }
    }
    if (filter.author && filter.author !== 'null') {
      if (article.author !== filter.author) return false;
    }
    if (filter.title) {
      return article.title.includes(filter.title);
    }

    if (filter.createdAt) {
      let isValid = compareYear(article, filter);
      isValid = compareMonth(article, filter);
      isValid = compareDate(article, filter);
      return isValid;
    }
    return true;
  });
  articlesArray.sort(comparator);
  console.log('From filter '+ articlesArray);
  return articlesArray.slice(skip, top);
}

app.get('/articlesNumber', (req, res) => {
  res.json(dataBase.articles.count());
});

app.get('/articles', (req, res) => {
  const filter = {
    title: req.query.title,
    author: req.query.author,
    createdAt: req.query.createdAt ? new Date(req.query.createdAt) : null,
    tags: req.query.tags ? req.query.tags.split(' ') : null,
  };
  const skip = Number(req.query.skip) || 0;
  const top = Number(req.query.top) || dataBase.articles.count();
  res.json(filterArticles(skip, top, filter));
});

app.get('/article/:id', (req, res) => {
  res.json(dataBase.articles.findOne({ id: req.params.id }));
});

app.post('/article', (req, res) => {
  res.json(dataBase.articles.save(req.body));
});

app.delete('/articles/:id', (req, res) => {
  res.json(dataBase.articles.remove({ id: req.params.id }));
});

app.put('/articles/', (req, res) => {
  res.json(dataBase.articles.update({ id: req.body.id }, req.body));
});

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});
