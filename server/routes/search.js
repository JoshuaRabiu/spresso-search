const { Router } = require('express');
const xray = require('x-ray');
const path = require('path');

const x = xray({
	filters: {
		clean: value => {
			if (!!value === true) {
				return value.substr(7).split('&sa=U&ved')[0];
			} else {
				return '';
			}
		}
	}
});
const router = Router();

router.get('*', (req, res, next) => {
	res.sendFile(path.resolve('../', 'build/index.html'))
})

router.post('/:query/:start?', (req, res) => {
	x(
		encodeURI(
			`https://www.google.com/search?q=${req.params.query}&start=${!!req.params.start ? req.params.start : 0}`
		),
		'.g',
		[
			{
				title: 'h3',
				link: 'a@href | clean',
				description: '.st',
				image: x('a@href | clean', 'meta[property="og:image"]@content'),
				favicon: x('a@href | clean', 'link[rel="icon"]@href')
			}
		]
	).then(obj => {
		let len = obj.length - 1;
		for (let i = len; i >= 0; --i) {
			// removes google news links, empty links, etc.
			if(!!obj[i].link === false || obj[i].link.indexOf('http') === -1){
				obj.splice(i, 1)
			}	
		}
		res.send(obj);
	}).catch(error => console.error(error));
});

module.exports = router;
