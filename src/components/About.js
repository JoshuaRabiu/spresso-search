import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css'

export const About = () => (
  <div>
    <Link to="/">
      <h3 className="home-1">Spresso</h3><h3 className="home-2">Search</h3>
    </Link>
  </div>
)