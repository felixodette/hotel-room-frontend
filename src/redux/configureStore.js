import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import greetingReducer from './greeting';

const rootReducer = combineReducers({
  // Add your reducers here like below
  // greeting: greetingReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;
