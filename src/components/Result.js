import React from 'react';
import './Result.css'

export const Result = ({ data }) => (
  <div className="card">
    <a href={data.url}>
      <img className="preview" src={data.image} />
      <img className="favicon" src={data.favicon} />
      <h3 className="title">{data.title}</h3>
    </a>
    <br />
    <p className="description">{data.description}</p>
  </div>
)