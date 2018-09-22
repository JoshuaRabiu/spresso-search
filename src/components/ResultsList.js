import React from 'react';
import { Loader } from './Loader';
import { Result } from './Result';
import { Outline } from './Outline';
import { changePage } from '../actions';
import './ResultsList.css'


export const ResultsList = ({ results, outline, loadingStatus, counter }) => {
  const ResultsArray = []
  const len = results.length
  for(let i = 0; i < len; i++){
    ResultsArray.push(<Result data={results[i]} />)
  }
  // if(loadingStatus === true){
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   )
  // }
  return (
    <div>
      <Outline outline={outline}/>
      {ResultsArray}
      <button className={!!counter + !!loadingStatus === 0 ? "invisible" : null} onClick={() => changePage('back')}>Previous Page</button>
      <button onClick={() => changePage('forward')}>Next Page</button>
    </div>
  )
}