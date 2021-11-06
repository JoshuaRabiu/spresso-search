# spresso-search 
[![Build Status](https://travis-ci.com/JoshuaRabiu/spresso-search.svg?branch=master)](https://travis-ci.com/JoshuaRabiu/spresso-search)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![Tesla Model 3 Search Results](https://i.imgur.com/W4DRwiS.png)

>Visual metasearch engine built with React, Redux, Express, and TypeScript.

[Live link to site](http://spresso-search.herokuapp.com/)

## About
Spresso Search scrapes search results from Google using the [node x-ray](https://github.com/matthewmueller/x-ray) library, and uses the same library to scrape obtain meta-information on webpages (preview images, favicons). There is a screenshot feature, which takes screenshots of sites that don't have meta preview images in their HTML. There is also a text-outline feature, powered by [node-unfluff](https://github.com/ageitgey/node-unfluff), which scrapes text content from web pages(ideal for articles & other text-rich pages), allowing the user to read the contents of a web page in clean, formatted text and without leaving the Spresso Search site.

## Running Locally
To run Spresso Search locally, first clone the repo with: `git clone https://github.com/JoshuaRabiu/spresso-search.git`


Then `cd` into its directory:  `cd spresso-search`

Install the dependencies with `yarn install`

Then run `yarn start` to run the client side code. The app should be visible on port 3000.

Open a new terminal tab/window in the same directory, and run `cd server` to go into the server directory.

Run `node ./build/server.js` to start the server. The app is now ready for use.

If making any modifications to the server's TypeScript code, you should start the TypeScript compiler in watch mode with

 `tsc -w` so your changes can be tracked in the JS build.


## License
[MIT](https://github.com/JoshuaRabiu/spresso-search/blob/master/LICENSE.md)
