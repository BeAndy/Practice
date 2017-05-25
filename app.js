const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('diskdb');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const session = require('express-session');
const SessionFS = require('session-file-store')(session);
const bCrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://articles:q@ds149431.mlab.com:49431/innews';

const app = express();
dataBase.connect('public/db', ['articles', 'users']);
app.use(express.static('public/UI'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: '536bc14fb8063107084ed399bf2bb2b1',
    store: new SessionFS(),
    saveUninitialized: true,
    resave: false,
  }));

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

app.get('/articlesNumber', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').find().count().then((number) => {
      res.json(number);
      db.close();
    });
  });
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
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').find().toArray().then((articlesArray) => {
      articlesArray = articlesArray.filter((article) => {
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
      res.json(articlesArray.slice(skip, top));
    });
  });
});

app.get('/article/:id', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').findOne({ id: req.params.id }).then((item) => {
      res.json(item);
      db.close();
    });
  });
});

app.post('/article', (req, res) => {
  res.json(dataBase.articles.save(req.body));
  const current = {
    id: req.body.id,
    title: req.body.title,
    summary: req.body.summary,
    createdAt: req.body.createdAt,
    tags: req.body.tags,
    author: req.body.author,
    content: req.body.content,
    imageSrc: req.body.imageSrc,
  };
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').insertOne(current, () => {
      db.close();
    });
  });
});

app.delete('/articles/:id', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').deleteOne({ id: req.params.id }, () => {
      db.close();
      res.sendStatus(200);
    });
  });
});

app.put('/articles/', (req, res) => {
  const current = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };
  MongoClient.connect(url, (err, db) => {
    db.collection('user-data').updateOne({ id: req.body.id }, { $set: current }, () => {
      db.close();
      res.sendStatus(200);
    });
  });
});

MongoClient.connect(url, () => {
  app.listen(3000, () => {
    console.log('App is listening on port 3000!');
  });
});


passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => {
  const err = user ? null : new Error('deserialize');
  done(err, user);
});

passport.use('login', new LocalStrategy({
  passReqToCallback: true,
},
(req, username, password, done) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('users').findOne({ username }).then((user) => {
      if (!user) {
        return done(null, false);
      }
      if (password !== user.password) {
        return done(null, false);
      }
      db.close();
      return done(null, user);
    });
  });
}));

app.post('/login', passport.authenticate('login'), (req, res) => {
  res.send(req.user.username);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

