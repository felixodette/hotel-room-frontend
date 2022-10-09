import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Room.css';
import { IoIosArrowDropright } from 'react-icons/io';

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
    <div className="row room-div">
      <div className="col-md-8 room-image">
        <img src={roomDetails.image} alt="room" className="room-image" />
      </div>
      <div className="col-md-4 room-details">
        <h3 className="room-name">
          {roomDetails.name}
        </h3>
        <div className="room-data">
          <p className="room-description">
            Room description:
            <span>{roomDetails.description}</span>
          </p>
          <p className="room-size">
            Room size:
            <span>{roomDetails.size}</span>
          </p>
          <p className="room-view">
            Room view:
            <span>{roomDetails.view}</span>
          </p>
          <p className="room-bedding">
            Room bedding:
            <span>{roomDetails.bedding}</span>
          </p>
          <div className="reserve-btn">
            <button type="button" className="btn" onClick={navigateToReserve}>
              Reserve
              <span><IoIosArrowDropright /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Room;
