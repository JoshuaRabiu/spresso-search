import React from 'react';
import '../style/SearchBox.css';
import { search, handleKey } from '../actions/index';
import glass from '../images/glass.svg';



export const SearchBox = ({results, query}) => (
		<div className="home">
			<h1 className="home-logo">Spresso</h1> <h1 className="home-logo-2">Search</h1>
			<input onKeyPress={(e) => handleKey(e)} autoFocus /><img onClick={search} className="glass" src={glass}/>
		</div>
)