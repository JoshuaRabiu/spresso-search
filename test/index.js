// /*
// Test: Search works when enter is pressed
// Test: Search works when magnifying glass is clicked
// Test: Enter Search works on reuslts view
// Test: Magnifying Glass search works on results view
// Test: More results are rendered on scroll down
// Test: Text-Outline Works, search specific link
//  */

// const puppeteer = require('puppeteer');
// const { expect } = require('chai');

// const opts = {
// 	headless: false
// };

// describe('Spresso Search', async function(){
// 	let browser;
// 	let page;

// 	before(async function(){
//     browser = await puppeteer.launch(opts);
// 	});

// 	beforeEach(async function(){
//     page = await browser.newPage();
//     await page.setViewport({width: 1280, height: 800})
//     await page.goto('http://spresso-search.herokuapp.com');
// 	});

// 	afterEach(async function(){
//     await page.close();
// 	});

// 	after(async function(){
//     await browser.close();
// 	});

// 	it('Returns search results are rendered when a query is typed and enter is pressed" ', async function(){
//     await page.click('input');
//     await page.keyboard.type('tesla');
//     await page.keyboard.press('Enter');
// 	});
// })