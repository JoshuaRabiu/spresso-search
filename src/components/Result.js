import React from 'react';
import '../style/Result.css'
import { outline } from '../actions';
import preloader from '../images/preloader.gif'
import document from '../images/document.svg';

const determine = (preview, plceholder, scrnshot) => {
  if(!!preview === false && !!scrnshot === false){
    return plceholder
  }
  else if(!!preview === false && !!scrnshot === true){
    return scrnshot
  }
  else{
    return preview
  }
}

export const Result = ({ data, screenshot }) => (
  <div className="card">
    <a target="_blank" href={data.link}><img className="preview" src={determine(data.image, preloader, screenshot)} /></a>
    <div className="card-body">
    <div className="title-bar">
    <a target="_blank" href={data.link}><img className="favicon" src={!!data.favicon ? data.favicon : `https://www.google.com/s2/favicons?domain=${data.link}`} /></a>
    <h4 className="title"><a target="_blank" href={data.link}>{data.title}</a><img className="icon" src={document} onClick={() => outline(data.link)} /></h4>
    
    </div>
    <div className="wrap">
    <p className="description">{data.description}</p>
    </div>
    </div>
  </div>
)