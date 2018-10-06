const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const SearchController = require('./routes/search.js');
const OutlineController = require('./routes/outline.js');
const path = require('path');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.on('UnhandledPromiseRejectionWarning' || 'TypeError', (err) => {
	console.err(err)
	process.exit(1)
})

const app = express();
app.use(express.static(path.resolve('../', 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: '*' }));
const port = process.env.PORT || 1337;
app.use(logger('dev'));
app.use('/search', SearchController);
app.use('/outline', OutlineController);
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
