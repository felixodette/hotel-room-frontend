import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import reservation from '../../redux/reservations/reservation.service';
import './reservation.scss';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [city, setCity] = useState('');
  const [reserved, setReserved] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (params.id) {
      dispatch(reservation.getReservation(params.id));
    }
  }, [params, dispatch]);

  const updateHandler = (e) => {
    const state = { id: e, reserved: true };
    dispatch(reservation.updateReservation(state));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (result > 0) {
      if (startDate === '' || endDate === '' || city === '') {
        setMessage('Please fill all the fields');
      } else {
        const reserveRoom = {
          room_id: params.rid,
          user_id: userInfo,
          start_date: startDate,
          end_date: endDate,
          city,
        };dispatch(reservation(reserveRoom));
        setReserved(true);
        setMessage('Room reserved successfully');
        navigate('/my_reservations');
      }
    } else {
      setMessage('Please select a valid end date');
    }
  };

  return (
    <div className="wrapper">
      <div className='reservation-container'>
        <h1>Reserve a room</h1>
        <form className='form-container form-reserve' onSubmit={submitHandler}>
          {reserved && message === 'Room reserved successfully' ? (
            <div className='alert alert-success' role='alert'>
              {message}
            </div>
            ) : (
              <div className='alert alert-danger' role='alert'>
                {message}
              </div>
            )}
          <div className='form-inputs'>
            <div className="city">
              <input
                type="text"
                placeholder="City"
                name='city'
                className="form-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                />
            </div>

            <div className="start-date-sec">
              <p>Start Date</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name='startDate'
                className="form-input"
                minDate={new Date()}
                required
                />
            </div>

            <div className="end-date-sec">
              <p> End Date</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                name="endDate"
                className="form-input"
                minDate={new Date()}
                required
              />
            </div>
          </div>
          {reserved ? (
            <button type="submit" className="btn-disbaled-reserve" disabled>
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="btn-enable-reserve"
              value={params.mid}
              onClick={(e) => updateHandler(e.target.value)}
            >
              Submit
            </button>
          )}
          /
        </form>
      </div>
    </div>
  );
};

export default Reservation;
