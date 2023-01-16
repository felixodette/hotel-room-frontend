const roomsApiUrl = 'https://suiteup-backend.onrender.com/api/v1/rooms';

const GET_ROOMS = 'GET_ROOMS';
const DELETE_ROOM = 'DELETE_ROOM';

export const getRooms = () => async (dispatch) => {
  const response = await fetch(roomsApiUrl);
  const rooms = await response.json();
  dispatch({
    type: GET_ROOMS,
    payload: rooms,
  });
};
export const deleteRoom = (id) => ({
  type: DELETE_ROOM,
  id,
});

const initialState = {
  rooms: [],
};

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };
    case DELETE_ROOM:
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.id),
      };
    default:
      return state;
  }
};

export default roomsReducer;
