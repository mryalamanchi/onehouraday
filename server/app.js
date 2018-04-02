const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:9000'
}));

app.use('/api/', routes);
app.use('/', express.static(path.join(__dirname, '../dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

module.exports = app;
