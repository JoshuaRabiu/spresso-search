const { Router } = require('express');
const google = require('google');
const xray = require('x-ray')();

google.resultsPerPage = 10
let nextCounter = 0

const router = Router();

router.post('/:query', (req, response) => {
	google(req.params.query, (err, res) => {
		if(err) console.err
		
		const arr = []
		let counter = 0;
		const links = res.links

		for(let i = 0; i < links.length ; ++i){
			counter++
			const len = links.length
			const link = links[i]
			xray(link.href, {
				image: 'meta[property="og:image"]@content',
				favicon: 'link[rel="icon"]@href'
			})
			.then((obj) => {
				arr.push({
					title: link.title,
					url: link.href,
					description: link.description,
					image: !!obj.image ? obj.image : '',
					favicon: !!obj.favicon ? obj.favicon : ''
				})
			}).catch(error => console.error)
			.then(() => {
				if(arr.length + 1 === len){
					console.log(arr)
					response.send(arr)
					return
				}
			}).catch(error => console.error)
		}
	})
})


module.exports = router
