import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';

export default combineReducers({
  reservations: reservationReducer
});
