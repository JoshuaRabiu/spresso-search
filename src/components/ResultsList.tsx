import * as React from 'react';
import * as InfiniteScroll from 'react-infinite-scroll-component';
import { nextPage } from '../actions/index';
import { Result } from './Result';
import { IData } from './Result';

interface IResultsListProps {
  results: any[];
  screenshots: string[];
}

export const ResultsList = ({ results, screenshots }: IResultsListProps): JSX.Element => {
  const ResultsArray = [];
  const len = results.length;

  for (let i = 0; i < len; i++) {
    ResultsArray.push(<Result data={results[i] as IData} screenshots={screenshots} />);
  }

  return (
    <InfiniteScroll
      dataLength={len}
      next={nextPage}
      hasMore={true}
      loader={<p className="loading-text">Loading...</p>}
    >
      {ResultsArray}
    </InfiniteScroll>
  );
};
