import React from 'react';
import Home from './containers/Home';
import { About } from './components/About';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css'

export const App = () => (
  <div>
    <Link className="about" to="/about">About</Link>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
)
