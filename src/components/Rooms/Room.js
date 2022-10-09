import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Room.css';

const Room = () => {
  const [roomDetails, setRoomDetails] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const roomData = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3000/api/v1/rooms/${id}`, roomData)
      .then((response) => response.json())
      .then((data) => setRoomDetails(data));
  }, []);

  const navigateToReserve = () => {
    navigate('/reservations-new');
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={roomDetails.image} alt="room" className="room-image" />
      </div>
      <div className="col-md-6">
        <h2 className="room-name">{roomDetails.name}</h2>
        <p className="room-description">{roomDetails.description}</p>
        <p className="room-size">{roomDetails.size}</p>
        <p className="room-view">{roomDetails.view}</p>
        <p className="room-bedding">{roomDetails.bedding}</p>
        <button type="button" className="btn btn-primary" onClick={navigateToReserve}>Reserve</button>
      </div>
      {/* <button type="button" onClick={navigateToReserve}>Reserve</button>
      <h1>
        {' '}
        Room name:
        {roomDetails.name}
        {' '}
      </h1>
      <h1>
        {' '}
        Room description:
        {roomDetails.description}
        {' '}
      </h1>
      <h1>
        <img src={roomDetails.image} alt={roomDetails.name} />
      </h1>
      <h1>
        {' '}
        Room size:
        {roomDetails.size}
        {' '}
      </h1>
      <h1>
        {' '}
        Room view:
        {roomDetails.view}
        {' '}
      </h1>
      <h1>
        {' '}
        Room bedding:
        {roomDetails.bedding}
        {' '}
      </h1> */}
    </div>
  );
};
export default Room;
