const GET_RESERVATIONS = 'GET_RESERVATIONS';

export const getReservations = (userId) => async (dispatch) => {
  const reservationApiUrl = `https://suiteup-backend.onrender.com/api/v1/users/${userId}/reservations`;
  const response = await fetch(reservationApiUrl);
  const reservations = await response.json();
  dispatch({
    type: GET_RESERVATIONS,
    payload: reservations.reservation,
  });
};

const initialState = {
  reservations: [],
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
