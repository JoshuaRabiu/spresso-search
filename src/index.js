import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));
registerServiceWorker();
