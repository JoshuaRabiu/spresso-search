import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage, handleKey, search, setQuery } from '../actions';
import '../style/ResultsList.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import glass from '../images/glass.svg';

export const ResultsList = ({ results, outline, screenshots, query }) => {
  const ResultsArray = []
  const len = results.length
  for (let i = 0; i < len; i++) {
    ResultsArray.push(<Result data={results[i]} screenshots={screenshots} />)
  }

  return (
    <div>
      <div className="top-bar" 
      ><Link to="/" target="_self"><h3 className="heading-1">Spresso</h3><h3 className="heading-2">Search</h3></Link>
        <input defaultValue={decodeURI(query)} onKeyPress={e => handleKey(e, 'reset')} onChange={e => setQuery(e)} /><img onClick={() => search('reset')} className="glass" alt="magnifying glass" src={glass} />
        <Link to="/about" className="about-bar">About</Link>
      </div>
      <Outline outline={outline} />
      <InfiniteScroll
        dataLength={len - 1}
        next={changePage}
        hasMore={true}
        loader={<p className="loading-text">Loading...</p>}
      >
        {ResultsArray}
      </InfiniteScroll>
    </div>
  )
}