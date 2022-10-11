import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => (
  <>
    <div id="add-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5">
      <div className="reservations-description">
        <div className="reservations-header">
          <h1>Book the place</h1>
        </div>
        <p>
          Pick a Room to Reserve!
        </p>
        <select>
          <option>Choose a room you want to reserve</option>
          <option>Room</option>
        </select>
        <div className="reservations-buttons">
          <DatePicker />
          <DropdownButton align="end" id="dropdown-menu-align-end">
            <Dropdown.Item eventKey="1">location</Dropdown.Item>
          </DropdownButton>
          <button type="submit" className="book-btn">Book now</button>
        </div>
      </div>
    </div>
  </>
);

export default Reservation;
