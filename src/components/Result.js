import React from 'react';
import './Result.css'
import { outline } from '../actions';
import placeholder from '../images/placeholder.png'

export const Result = ({ data }) => (
  <div className="card">
    <a target="_blank" href={data.link}><img className="preview" src={!!data.image ? data.image : placeholder} /></a>
    <div className="card-body">
    <div className="title-bar">
    <a target="_blank" href={data.link}><img className="favicon" src={!!data.favicon ? data.favicon : `https://www.google.com/s2/favicons?domain=${data.link}`} /></a>
    <h4 className="title"><a target="_blank" href={data.link}>{data.title}</a><button onClick={() => outline(data.link)}>O</button></h4>
    
    </div>
    <div className="wrap">
    <p className="description">{data.description}</p>
    </div>
    </div>
  </div>
)