import { FETCH_RESERVATIONS, NEW_RESERVATION } from "./types";

export const fetchReservations = () => (dispatch) => {
  console.log('fetching');
  fetch('https://localhost:3001/api/v1/reservations')
    .then((res) => res.json())
    .then((reservations) => dispatch({
      type: FETCH_RESERVATIONS,
      payload: reservations,
    }));
};

export const createReservation = (reservationData) => (dispatch) => {
  console.log('action called');
  fetch('https://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(reservationData)
  })
    .then((res) => res.json())
    .then((post) => dispatch({
      type: NEW_RESERVATION,
      payload: post,
    }));
};
