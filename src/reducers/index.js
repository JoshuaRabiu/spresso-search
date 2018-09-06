import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { resultsReducer } from './resultsReducer.js';

export const rootReducer = combineReducers({
	results: resultsReducer
})

const middleware = applyMiddleware(thunk, logger)
export const store = createStore(rootReducer, middleware)
store.subscribe(() => console.log(store.getState()))
