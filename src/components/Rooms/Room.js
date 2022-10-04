import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Room = () => {
  const [roomDetails, setRoomDetails] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/rooms/${id}`)
      .then((response) => {
        setRoomDetails(response.data);
      });
  }, []);

  return (
    <div>
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
        {' '}
        Room image:
        {roomDetails.image}
        {' '}
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
