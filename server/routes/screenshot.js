const { Router } = require('express');

const puppeteer = require('puppeteer');
const router = Router()

router.post('/:url(*)', (req, res) => {
  puppeteer.launch().then(async browser => {
    const newArr = [];
    const promises = [];
    const links = req.params.url.split(',');
    links.forEach(link => {
      promises.push(browser.newPage().then(async page => {
        await page.setViewport({width: 1000, height: 500})
        await page.goto(link, {waitUntil: 'networkidle2'});
        const snap = await page.screenshot();
        const image = `data:image/png;base64,${snap.toString('base64')}`
        newArr.push(image)
      }))
    })
    await Promise.all(promises)
    res.send(newArr)
    browser.close();
  })
})

module.exports = router