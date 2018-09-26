import React from 'react';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage } from '../actions';
import '../style/ResultsList.css'

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

    if (!!results[i].image === false) {
      for (let j = 0; j < linksToScreenshot.length; j++) {
        if (!!screenshots.length === false) {
          continue
        }
        else if (!!screenshots.length === true && results[i].link === screenshots[j].site) {
          ResultsArray.push(<Result data={results[i]} screenshot={screenshots[j].image} />)
        }
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