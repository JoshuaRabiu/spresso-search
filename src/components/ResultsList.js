import React from 'react';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage } from '../actions';
import '../style/ResultsList.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { search } from '../actions/index';

export const ResultsList = ({ results, outline, screenshots, query }) => {
  const ResultsArray = []
  const len = results.length
  for (let i = 0; i < len; i++) {
    ResultsArray.push(<Result data={results[i]} screenshots={screenshots} />)
  }

  return (
    <div>
      <div className="top-bar" ><input defaultValue={query} onKeyPress={(e) => search(e, 'reset')} /></div>
      <Outline outline={outline} />
      <InfiniteScroll
        dataLength={len + 1}
        next={changePage}
        hasMore={true}
        loader={<p className="loading-text">Loading...</p>}
      >
        {ResultsArray}
      </InfiniteScroll>
    </div>
  )
}