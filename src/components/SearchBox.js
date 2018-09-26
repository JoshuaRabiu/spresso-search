import React from 'react';
import '../style/SearchBox.css';
import { search } from '../actions/index';


export const SearchBox = ({results}) => (
		<div className="home">
			<h1 className="home-logo">Spresso</h1> <h1 className="home-logo-2">Search</h1>
			<input onKeyPress={(e) => search(e)} autoFocus />
		</div>
)