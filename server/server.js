const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const SearchController = require('./routes/search.js');

const app = express();
const port = process.env.PORT || 1337;
app.use(logger('dev'));
app.use(bodyParser.text());
app.use('/search', SearchController);
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})