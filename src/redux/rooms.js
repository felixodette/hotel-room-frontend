const roomsApiUrl = 'http://localhost:3000/api/v1/rooms';

const GET_ROOMS = 'GET_ROOMS';

export const getRooms = () => async (dispatch) => {
    const response = await fetch(roomsApiUrl);
    const rooms = await response.json();
    console.log(rooms);
    dispatch({
        type: GET_ROOMS,
        payload: rooms,
    });
};

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
        default:
            return state;
    }
}

export default roomsReducer;