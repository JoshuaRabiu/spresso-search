# spresso-search
![Tesla Model 3 Search Results](https://i.imgur.com/aV3uZr3.png)
Visual metasearch engine built with React, Redux, Express, and TypeScript.

[Live link to site](http://spresso-search.herokuapp.com/)

## About
Spresso search scrapes search results from Google using the [node x-ray](https://github.com/matthewmueller/x-ray) library, and uses the same library to scrape obtain meta-information on webpages (preview images, favicons). There is a screenshot feature, which takes screenshots of sites that don't have meta preview images in their HTML. There is also a text-outline feature, powered by [node-unfluff](https://github.com/ageitgey/node-unfluff), which scrapes text content from web pages(ideal for articles & other text-rich pages), allowing the user to read the contents of a web page in clean, formatted text and without leaving the Spresso Search site.

## License
[MIT](https://github.com/JoshuaScript/spresso-search/LICENSE.md)
