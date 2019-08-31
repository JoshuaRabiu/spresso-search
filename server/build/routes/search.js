"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const path = require('path');
const { get } = require('axios');
const router = Router();
router.get('*', (req, res, next) => {
    res.sendFile(path.resolve('../', 'build/index.html'));
});
router.post('/:query/:start?', async (req, res) => {
    const { query, start } = req.params;
    try {
        const { data: { items } } = await get(`
    https://www.googleapis.com/customsearch/v1?key=AIzaSyBHU6yrWSnBlxoQXreinayGeLuWlyTyaLI&cx=000950167190857528722:vf0rypkbf0w&start=${start
            ? start
            : 10}&q=${encodeURI(query)}`);
        res.send(items);
    }
    catch (error) {
        console.error(error);
    }
});
exports.SearchController = router;
