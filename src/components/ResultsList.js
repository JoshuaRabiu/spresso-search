import React from 'react';
import { Result } from './Result';
import InfiniteScroll from 'react-infinite-scroll-component';
import { changePage } from '../actions/index';

export const ResultsList = ({ results, screenshots }) => {
	const ResultsArray = [];
	const len = results.length;

	for (let i = 0; i < len; i++) {
		ResultsArray.push(<Result data={results[i]} screenshots={screenshots} />);
  }
  
	return (
		<InfiniteScroll
			dataLength={len - 1}
			next={changePage}
			hasMore={true}
			loader={<p className="loading-text">Loading...</p>}
		>
			{ResultsArray}
		</InfiniteScroll>
	);
};
