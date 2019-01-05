const express = require('express');
const path = require('path');
const { db } = require('./db/index');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '..', '..', 'public')))


const start = () => {
  db.sync({force: true});

  // start listening
  app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
  });
};

start();
