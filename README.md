# spresso-search
[Work-in-Progress] Visual metasearch engine built with React, Redux, and Express.
![]()
![]()

## About
Spresso search scrapes search results from Google using the [node x-ray](https://github.com/matthewmueller/x-ray) library, and uses the same library scrape obtain meta-information on webpages (preview images, favicons). There is also a screenshot feature, which takes screenshots of sites that don't have meta preview images in their HTML. The [node-unfluff](https://github.com/ageitgey/node-unfluff) library is used to scrape text content from web pages(ideal for articles & other text-rich pages), allowing the user to read the contents of a web page in clean, formatted text and without leaving the Spresso Search site.

## License
[MIT](https://github.com/JoshuaScript/spresso-search/LICENSE.md)