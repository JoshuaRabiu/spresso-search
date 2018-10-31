const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Spresso Search', async function(){
  let browser;
  let page;

  const opts = {
    args: [ '--start-fullscreen' ]
  };

  this.timeout(20000);
  before(async function(){
    browser = await puppeteer.launch(opts);
  });

  beforeEach(async function(){
    page = await browser.newPage();
    await page.goto('http://spresso-search.herokuapp.com/', {
      waitUntil: 'load'
    });
  });

  afterEach(async function(){
    await page.close();
  });

  after(async function(){
    await browser.close();
  });

  it('Returns search results when a query is typed and enter is pressed ', async function(){
    await page.click('input');
    await page.keyboard.type('tesla');
    await page.keyboard.press('Enter');
    const cards = await page.waitForSelector('.card');
    expect(!!cards).to.be.true;
  });

  it('Returns search results when a query is typed and the magnifying glass icon is pressed', async function(){
    await page.click('input');
    await page.keyboard.type('tesla');
    await page.click('.glass');
    const cards = await page.waitForSelector('.card');
    expect(!!cards).to.be.true;
  });

  it('Renders more results on scroll down (Infinite Scroll)', async function(){
    await page.click('input');
    await page.keyboard.type('tesla');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.card');
    const initialNumOfCards = await page.evaluate(() => {
      return document.getElementsByClassName('card').length;
    });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitFor(7000);
    const numOfCardsAfterScroll = await page.evaluate(() => {
      return document.getElementsByClassName('card').length;
    });
    expect(numOfCardsAfterScroll).to.be.greaterThan(initialNumOfCards);
  });

  it('Text outline returns a title and text', async function(){
    await page.click('input');
    // Ensures that only text-rich results are returned
    await page.keyboard.type('tesla site:wikipedia.com');
    await page.keyboard.press('Enter');
    await page.waitForSelector('.card');
    await page.click('div.card:nth-child(1) > div:nth-child(2) > img:nth-child(3)');
    await page.waitForSelector('.outline > p:nth-child(3)');
    const outlineTitle = await page.evaluate(() => {
      return document.querySelector('.outline > h3:nth-child(2)').innerText;
    });
    const outlineText = await page.evaluate(() => {
      return document.querySelector('.outline > p:nth-child(3)').innerText;
    });
    expect(!!outlineTitle, !!outlineText).to.be.true;
  });
});
