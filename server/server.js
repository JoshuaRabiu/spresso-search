const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const SearchController = require('./routes/search.js');
const ScreenshotController = require('./routes/screenshot.js')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: '*'}))
const port = process.env.PORT || 1337;
app.use(logger('dev'));
app.use('/search', SearchController);
app.use('/screenshot', ScreenshotController)
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})