import * as React from 'react';
import Home from './containers/Home';
import { About } from './components/About';
import { Switch, Route } from 'react-router-dom';
import './App.css'

export const App: React.StatelessComponent = ():JSX.Element => (
  <div>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
)
