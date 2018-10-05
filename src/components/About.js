import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

export const About = () => (
	<div>
		<Link to="/">
			<h3 className="home-1">Spresso</h3>
			<h3 className="home-2">Search</h3>
		</Link>
		<div className="center">
			<h4>About</h4>
			<p>
				Spresso Search is a visual metasearch engine. It scrapes results from google and obtains their meta-data
				using the <a href="https://github.com/matthewmueller/x-ray">node x-ray</a> library. It also has a text-outline feature (powered by <a href="https://github.com/ageitgey/node-unfluff">node-unfluff</a>) that allows users to read the contents of a web page in clean, formatted text without leaving the Spresso Search site.
			</p>
		</div>
	</div>
);
