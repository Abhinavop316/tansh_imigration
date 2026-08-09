const express = require('express');
const cors = require('cors');

//router
const clientRouter = require('./routes/client.route');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', clientRouter);

module.exports = app;