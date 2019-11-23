const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel.js');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/bookAPI');


bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre !== undefined) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
