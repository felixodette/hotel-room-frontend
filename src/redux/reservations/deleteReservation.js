import axios from 'axios';

const initialState = [];
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION';

const deleteReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  await axios.delete(`https://localhost:3001/api/v1/bookings/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_RESERVATION, payload: response });
    });
};

export default deleteReservationReducer;
