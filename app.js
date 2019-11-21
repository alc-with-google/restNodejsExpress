const express = require('express');

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    //creating the response
    const response = { hello: 'This is my API' };

    //sending the response
    res.json(response)

    //we could have res.sendFile(); res.render(); res.send()
  });

app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
