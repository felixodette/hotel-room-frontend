import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  // Add your reducers here like below
  rooms: roomsReducer,
  reservations: reservationsReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;
