const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('diskdb');

const app = express();
dataBase.connect('public/db', ['articles']);
app.use(express.static('public/UI'));
app.use(bodyParser.json());

app.get('/articles', (req, res) => {
  res.json(dataBase.articles.find());
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
