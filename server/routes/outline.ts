const { Request, Response, Router } = require('express');
const request = require('request');
const unfluff = require('unfluff');

const router: any = Router();

router.post('/:site(*)', (req: Request, response: Response) => {
	const site = req.params.site;
	request(site, (err, res, body) => {
		const data = unfluff(body);
		response.send({
			title: data.title,
			text: data.text
		});
	});
});

export const OutlineController = router;