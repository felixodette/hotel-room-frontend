import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div>
      <button type="button" onClick={navigateToReserve}>Reserve</button>
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
      </h1>
    </div>
  );
};
export default Room;
