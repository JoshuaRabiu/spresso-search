import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';
import { changePage } from '../actions/index';
import { Result } from './Result';
import { IData } from './Result';
import { IHomeProps } from '../containers/Home';

interface IResultsList extends IHomeProps {
	results: []
}

export const ResultsList = ({ results, screenshots }: IResultsList)=> {
	const ResultsArray = [];
	const len = results.length;
	
	for (let i = 0; i < len; i++) {
		ResultsArray.push(<Result data={results[i] as IData} screenshots={screenshots} />);
  }
  
	return (
		<InfiniteScroll
			dataLength={len}
			next={changePage}
			hasMore={true}
		>
			{ResultsArray}
		</InfiniteScroll>
	);
};

