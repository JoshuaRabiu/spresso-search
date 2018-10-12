/*
Test: Search works when enter is pressed
Test: Search works when magnifying glass is clicked
Test: Enter Search works on reuslts view
Test: Magnifying Glass search works on results view
Test: More results are rendered on scroll down
Test: Text-Outline Works, search specific link
 */

const puppeteer = require('puppeteer');
const { expect } = require('chai');

const opts = {
  headless: false,
}

describe( 'Test Website', async () => {
  before(async function(){

    browser = await puppeteer.launch( opts );

    page = await browser.newPage();

    await page.setViewport( { width: 1280, height: 800} );

  });

  after(async function(){
    await browser.close()
  })
 
});
