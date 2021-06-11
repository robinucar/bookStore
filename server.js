const express = require('express');
const connectDB = require('./model/connectDB');
require('dotenv').config();

const app = express();

const router = require('./routes/router');

connectDB();
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`I am listening on port ${process.env.PORT}`);
});
