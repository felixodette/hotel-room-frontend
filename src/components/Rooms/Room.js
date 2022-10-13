import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Room.css';
import { IoIosArrowDropright } from 'react-icons/io';
import { BiLeftArrow } from 'react-icons/bi';

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

  const navigateToReserve = (id) => {
    navigate(`/reservations-new/${id}`);
  };
  const userLogin = (id) => {
    if (localStorage.getItem('id') === null) {
      navigate('/user');
    } else {
      navigateToReserve(id);
    }
  };
  const backBtn = () => {
    navigate('/');
  };

  return (
    <div className="row room-div">
      <div className="col-md-8 room-image">
        <img src={roomDetails.image} alt="room" className="room-image" />
      </div>
      <div className="col-md-4 room-details">
        <h3 className="room-name text-center">
          {roomDetails.name}
        </h3>
        <div className="room-data">
          <p className="room-description p-2">
            Description:
            {' '}
            <span
            className='ms-2'
            >{roomDetails.description}</span>
          </p>
          <p className="room-size p-2">
            Size:
            <span>{roomDetails.size}</span>
          </p>
          <p className="room-view p-2">
            View:
            <span>{roomDetails.view}</span>
          </p>
          <p className="room-bedding p-2">
            Bedding:
            <span>{roomDetails.bedding}</span>
          </p>
          <div className="reserve-btn">
            <button type="button" className="fw-bold d-flex align-center justify-content-around" id='reserve-button' onClick={() => userLogin(roomDetails.id)}>
              Reserve
              <span><IoIosArrowDropright /></span>
            </button>
          </div>
        </div>
      </div>
      <div className="back-arrow fixed-bottom">
        <button
          type="button"
          className="btn"
          onClick={backBtn}
        >
          <BiLeftArrow />
        </button>
      </div>
    </div>
  );
};

export default Room;
