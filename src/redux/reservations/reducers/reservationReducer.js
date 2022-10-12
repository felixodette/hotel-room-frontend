import { FETCH_RESERVATIONS, NEW_RESERVATION } from "../../../actions/types";

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_RESERVATIONS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_RESERVATION:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
