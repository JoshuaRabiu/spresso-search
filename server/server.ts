const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { SearchController } = require('./routes/search.js');
const { OutlineController } = require('./routes/outline.js');
const path = require('path');
const compression = require('compression');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();
app.use(compression());
app.use(express.static(path.resolve('../', 'build')));
app.use(bodyParser.text());
app.use(logger('dev'));
app.use('/search', SearchController);
app.use('/outline', OutlineController);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
