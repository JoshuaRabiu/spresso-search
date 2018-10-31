const { Request, Response, Router } = require('express');
import * as express from 'express';
const request = require('request');
const unfluff = require('unfluff');

const router: any = Router();

router.post('/:site(*)', (req: express.Request, response: express.Response) => {
  const site = req.params.site;
  request(site, (err: Error, res: any, body: any) => {
    const data = unfluff(body);
    response.send({
      title: data.title,
      text: data.text
    });
  });
});

export const OutlineController = router;