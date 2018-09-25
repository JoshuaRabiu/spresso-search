import React from 'react';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage } from '../actions';
import './ResultsList.css'


export const ResultsList = ({ results, outline, loadingStatus, counter, screenshots, linksToScreenshot }) => {
  const ResultsArray = []
  const len = results.length
  for (let i = 0; i < len; i++) {
    if (!!results[i].image === false) {
      for (let j = 0; j < linksToScreenshot.length; j++) {
        ResultsArray.push(<Result data={results[i]} screenshot={screenshots[j]} />)
      }
    }
    else {
      ResultsArray.push(<Result data={results[i]} />)
    }
  }

  return (
    <div>
      <Outline outline={outline} />
      {ResultsArray}
      <button className={!!counter + !!loadingStatus === 0 ? "invisible" : null} onClick={() => changePage('back')}>Previous Page</button>
      <button onClick={() => changePage('forward')}>Next Page</button>
    </div>
  )
}