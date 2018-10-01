import React from 'react';
import '../style/Result.css'
import { outline } from '../actions';
import preloader from '../images/preloader.gif'
import document from '../images/document.svg';

const determine = (image, link, screenshots) => {
  if (image) {
    return image
  }
  if (!image) {
    for (let i = 0; i < screenshots.length; i++) {
      if (screenshots[i].link === link) {
        return screenshots[i].screenshot
      }
    }
    return preloader
  }
}

export const Result = ({ data, screenshots }) => (
  <div className="card">
    <a target="_blank" href={data.link}><img className="preview" src={determine(data.image, data.link, screenshots)} /></a>
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