import React from 'react';
import { Loader } from './Loader';
import '../style/Outline.css';

export const Outline = ({results, outline}) => {
if(outline === 'outline loading...'){
  return (
    <div className="outline">
      <Loader />
    </div>
  )
}
  return(
  <div className="outline">
    <h4 className="placeholder">{!!outline ? null : 'Spresso Text-Outline\n v.1.0.0'}</h4>
    <h3><a target="_blank" href={outline.link}>{outline.title}</a></h3>
    <i>{outline.author}</i>
    <p>{outline.text}</p>
  </div>)
}