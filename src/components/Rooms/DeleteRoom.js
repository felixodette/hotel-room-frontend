import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms, deleteRoom } from '../../redux/rooms';
import '../styles/DeleteRoom.css';

const DeleteRoom = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const [message, setMessage] = useState('');

  const checkResponse = (response, id) => {
    if (response === 204) {
      dispatch(deleteRoom(id));
    } else {
      setMessage(<div className="add-room-error-notification border mt-1 py-1 px-2 bg-dark text-danger rounded p-1">ERROR: Reserved rooms can`t be deleted</div>);
    }
  };
  setInterval(() => { setMessage(''); }, 5000);

  const deleteRoomHandler = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };

    fetch(`https://suiteup-backend.onrender.com/api/v1/rooms/${id}`, requestOptions)
      .then((response) => checkResponse(response.status, id));
  };

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  if (rooms.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 mt-5 pt-5 mt-md-0 pt-md-0">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div id="delete-room-container" className="container-fluid d-flex flex-column align-items-center mb-5 pt-5">
      <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">Delete Room</h2>
      <hr id="add-room-hr" />
      <p className="text-center  fs-6 text-white">
        Would you like to delete your hotel room from our website?
        {' '}
        <br />
        You can do it with one click!
      </p>
      <div>
        {message}
      </div>
      <div id="delete-room-table" className="table w-50 table-hover">
        <table className="table w-100 table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-white">Room Name</th>
              <th scope="col" className="text-center text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr className="room" key={room.id}>
                <td><p className="text-white mt-3" id="room-name">{room.name}</p></td>
                <td className="text-center">
                  <button
                    id="delete-room-btn"
                    className="mt-2"
                    type="button"
                    onClick={() => deleteRoomHandler(room.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default DeleteRoom;
