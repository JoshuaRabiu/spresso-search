import React from 'react';
import './SearchBox.css';
import { search } from '../actions/index';
import { Result } from './Result';



export const SearchBox = ({results}) => {
	const len = results.length


	if(len > 0){

		const ResultsArray = []
		for(let i = 0; i < len; i++){
			ResultsArray.push(<Result data={results[i]} />)
		}
		return ResultsArray
	}

	const fetchIt = () => {
		fetch('https://tesla.com', {'mode': 'no-cors'})
		.then(res => {
			return res.text
		})
		// .catch(error => console.error)
		.then((resText) => {
			const parsedRes = (new window.DOMParser()).parseFromString(resText, 'text/html')
			console.log(parsedRes)
		})
		.catch(error => console.error)
	}

	return(
		<div>
			<input onKeyPress={(e) => search(e)} autoFocus />
			{fetchIt()}
		</div>
		)
}