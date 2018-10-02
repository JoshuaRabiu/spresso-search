import React from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import '../style/Result.css'
import { outline } from '../actions';
import imgLoader from '../images/imgLoader.gif'
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
    return imgLoader
  }
}

export const Result = ({ data, screenshots }) => (
  <div className="card">
    <a target="_blank" href={data.link}><img className="preview" src={determine(data.image, data.link, screenshots)} /></a>
    <div className="card-body">
      <div className="title-bar">
        <a target="_blank" href={data.link}>
          <img className="favicon" src={!!data.favicon ? data.favicon : `https://www.google.com/s2/favicons?domain=${data.link}`} />
        </a>
        <h4 className="title">
          <a className="ext-link" target="_blank" href={data.link}>{data.title}</a>
        </h4>
        <Tooltip placement="right" overlay={"Text-Only Outline"} arrowContent={<div className="rc-tooltip-arrow-inner" />}>
          <img className="icon" src={document} onClick={() => outline(data.link)} />
        </ Tooltip>

      </div>
      <div className="wrap">
        <p className="description">{data.description}</p>
      </div>
    </div>
  </div>
)