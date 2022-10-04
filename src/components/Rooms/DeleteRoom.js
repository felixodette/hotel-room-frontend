import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../../redux/rooms';

const DeleteRoom = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  const deleteRoom = (id) => {
    fetch(`http://localhost:3000/api/v1/rooms/${id}`, requestOptions);
  };

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  return (
    <div>
      <h1>Rooms</h1>
      <div className="rooms">
        {rooms.map((room) => (
          <div className="room" key={room.id}>
            <h3>{room.name}</h3>
            <button
              type="button"
              onClick={() => deleteRoom(room.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteRoom;
