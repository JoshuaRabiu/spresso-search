const { Router } = require('express');
const puppeteer = require('puppeteer');
// const xray = require('x-ray')({
// 	filters: ({
// 		allow_undefined: function (value = false) {
// 			return (value) ? value : null
// 		}
// 	})
// });
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
	const arr = []
	x(`https://www.google.com/search?q=${req.params.query}&start=${!!req.params.start ? req.params.start : 0}`, '.g', [{
		title: 'h3',
		link: 'a@href | clean',
		description: '.st',
		image: x('a@href | clean', 'meta[property="og:image"]@content'),
		favicon: x('a@href | clean', 'link[rel="icon"]@href')
	}]).then(obj => {
		for (let i = 0; i < obj.length; i++) {
			if (obj[i].link.indexOf('http') === -1){
				obj.splice(i, 1)
			}
			else{
				continue
			}
		}
		console.log(obj)
		res.send(obj)
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

router.post('/screenshot/:href(*)', (req, res) => {
	// const browser = await puppeteer.launch();
	// const page = await browser.newPage();
	// const newArr = []
	// const sites = req.body.
	// for(let i = 0; i < links.length; i++){
	// 		const link = links[i]
	// 		(async () => {
	// 			await page.goto(link, {waitUntil: 'networkidle2'});
	// 			const screenshot = await page.screenshot()
	// 			newArr.push(`data:image/png;base64,${screenshot.toString('base64')}`)
	// 		})();
	// 	}

	// res.send(newArr)
	// await browser.close();


	// (async () => {
	// const browser = await puppeteer.launch();
	// const page = await browser.newPage();
	// await page.goto(req.params.href, {waitUntil: 'networkidle2'});
	// const snap = await page.screenshot()
	// const image = `data:image/png;base64,${snap.toString('base64')}`
	// console.log(image)
	// res.send(image)
	// await browser.close();

	// })();


})


module.exports = router
