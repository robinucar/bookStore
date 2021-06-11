const express = require('express');
const connectDB = require('./model/connectDB');
require('dotenv').config();

const app = express();

const router = require('./routes/router');

connectDB();
app.use('/api', router);

app.listen(5000, () => {
  console.log('I am listening on port 5000');
});
