import React from 'react';
import '../style/SearchBox.css';
import { search, handleKey, setQuery } from '../actions/index';
import glass from '../images/glass.svg';



export const SearchBox = () => (
		<div className="home">
			<h1 className="home-logo">Spresso</h1> <h1 className="home-logo-2">Search</h1>
			<input onChange={e => setQuery(e)} onKeyPress={e => handleKey(e)} autoFocus /><img onClick={search} className="glass" src={glass}/>
		</div>
)