const { Router } = require('express');
const xray = require('x-ray');
const x = xray({
	filters: {
		clean: (value) => {
			if (!!value === true) {
				return value.substr(7).split('&sa=U&ved')[0]
			}
			else {
				return ''
			}
		}
	}
})

const request = require('request');
const unfluff = require('unfluff');
const router = Router()

const page = (param) => {
	if (!!param) {
		return param
	}
	else {
		return
	}
}

router.post('/:query/:start?', (req, res) => {
	x(`https://www.google.com/search?q=${encodeURI(req.params.query)}&start=${!!req.params.start ? req.params.start : 0}`, '.g', [{
		title: 'h3',
		link: 'a@href | clean',
		description: '.st',
		image: x('a@href | clean', 'meta[property="og:image"]@content'),
		favicon: x('a@href | clean', 'link[rel="icon"]@href')
	}]).then(obj => {
		let len = obj.length -1
		for (let i = len; i >= 0; --i) {
			// removes google news, maps, etc results
			if (obj[i].link.indexOf('http') === -1) {
				obj.splice(i, 1)
			}
		}
		res.send(obj)
		console.log(obj)
	})
})

router.post('/outline/:site(*)', (req, response) => {
	const site = req.params.site
	request(site, (err, res, body) => {
		const data = unfluff(body);
		response.send({
			title: data.title,
			text: data.text,
			link: data.canonicalLink,
			author: data.author
		})
	});
})



module.exports = router
