import React from 'react';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage } from '../actions';
import '../style/ResultsList.css'
import InfiniteScroll from 'react-infinite-scroll-component';

export const ResultsList = ({ results, outline, loadingStatus, counter, screenshots, linksToScreenshot }) => {
  const ResultsArray = []
  const len = results.length
  for (let i = 0; i < len; i++) {
    // if (results[i].link in linksToScreenshot) {
    //   for (let j = 0; j < linksToScreenshot.length; j++) {
    //     if (results[i].link === screenshots[j].link) {
    //       ResultsArray.push(<Result data={results[i]} screenshot={screenshots[j].image} />)
    //     }
    //     else if (!!screenshots.length === false) {
    //       ResultsArray.push(<Result data={results[i]} screenshot={} />)
    //     }
    //   }
    // }

    // if (!!results[i].image === false) {
    //   main:
    //   for (let j = 0; j < linksToScreenshot.length; j++) {
    //     if (!!screenshots.length === false) {
    //       ResultsArray.push(<Result data={results[i]} screenshot={screenshots[j]} />)
    //       break main;
    //     }
    //     else if (!!screenshots.length === true && results[i].link === screenshots[j].site) {
    //       ResultsArray[i] = <Result data={results[i]} screenshot={screenshots[j].image} />
    //       break main;
    //     }
    //   }
    // }
    // else {
    ResultsArray.push(<Result data={results[i]} />)
    // }
  }


  return (
    <div>
      <Outline outline={outline} />
      <InfiniteScroll
        dataLength={len}
        next={changePage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
        {ResultsArray}
      </InfiniteScroll>
    </div>
  )
}