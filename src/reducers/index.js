import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { resultsReducer } from './resultsReducer.js';
import { loadingStatusReducer } from './loadingStatus.js';
import { outlineReducer } from './outlineReducer.js';
import { queryReducer } from './queryReducer.js';
import { counterReducer } from './counter.js';
import { screenshotsReducer } from './screenshotsReducer.js';

export const rootReducer = combineReducers({
	results: resultsReducer,
	loadingStatus: loadingStatusReducer,
	outline: outlineReducer,
	query: queryReducer,
	counter: counterReducer,
	screenshots: screenshotsReducer
})

const middleware = applyMiddleware(thunk, logger)
export const store = createStore(rootReducer, middleware)
// store.subscribe(() => console.log(store.getState()))
