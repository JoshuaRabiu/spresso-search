"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Request, Response, Router } = require('express');
const request = require('request');
const unfluff = require('unfluff');
const router = Router();
router.post('/:site(*)', (req, response) => {
    const site = req.params.site;
    request(site, (err, res, body) => {
        const data = unfluff(body);
        response.send({
            title: data.title,
            text: data.text
        });
    });
});
exports.OutlineController = router;
