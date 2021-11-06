import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

export const About: React.StatelessComponent = (): JSX.Element => (
  <div>
    <Link to="/">
      <h3 className="home-1">Spresso</h3>
      <h3 className="home-2">Search</h3>
    </Link>
    <div className="center">
      <h4>About</h4>
      <h4><a href="https://github.com/JoshuaRabiu/spresso-search">Source code on Github</a></h4>
      <p>
        Spresso Search is a visual metasearch engine built using React, Redux and Express. It scrapes results from Google and obtains their meta-data
        using the <a href="https://github.com/matthewmueller/x-ray">node x-ray</a> library. It also has a text-outline feature (powered by <a href="https://github.com/ageitgey/node-unfluff">node-unfluff</a>) that allows you to read the contents of a web page in clean, formatted text without leaving the Spresso Search site.
      </p>
      <ul>
        Attributions:
        <li>Icons: <a href="https://www.flaticon.com/free-icon/magnifying-glass-browser_70490#term=search&page=1&position=45">Magnifying Glass</a> | <a href="https://www.flaticon.com/free-icon/text-document_32329#term=text&page=1&position=9">Outline</a></li>
        <li><a href="https://codepen.io/rbv912/pen/dYbqLQ">Loading Animation</a></li>
      </ul>
    </div>
  </div>
);
