const express = require('express');
const { connectDb } = require('./cfg/db');

const app = express();

require('dotenv').config();
connectDb();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
