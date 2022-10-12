import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createReservation } from '../actions/reservationActions';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      location: '',
      date: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const reservation = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      date: this.state.date
    };
    this.props.createReservation(reservation);
  }

  render() {
    return (
      <>
        <div id="add-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5">
          <div className="reservations-description">
            <div className="reservations-header">
              <h1>Book the place</h1>
            </div>
            <p>
              Pick a Room to Reserve!
            </p>
            <form onSubmit={this.onSubmit}>
              <div>
                <select>
                  <option>Choose a room you want to reserve</option>
                  <option name="room">Room</option>
                </select>
                <div className="reservations-buttons">
                  <DatePicker />
                  <DropdownButton align="end" id="dropdown-menu-align-end">
                    <Dropdown.Item eventKey="1">location</Dropdown.Item>
                  </DropdownButton>
                  <button type="submit" className="book-btn">Book now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

Reservation.propTypes ={
  createReservation: PropTypes.func.isRequired
};

export default connect(null, { createReservation })(Reservation);
