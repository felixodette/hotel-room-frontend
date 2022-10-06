import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReservationRooms from './ReservationRooms';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => {
  const { id } = useParams();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const user = useSelector((state) => state.user);

  const today = new Date().toISOString().slice(0, 10);

  const findRooms = (e) => {
    e.preventDefault();
    if (date && city) {
      axios
        .get(`/api/v1/reserve/rooms/${date}`)
        .then((response) => setRooms(response.data.rooms));
      setLoading(true);
    }
  };

  const reserveRoom = (e) => {
    e.preventDefault();
    if (date && city) {
      setLoading(true);
      axios
        .post(
          `/api/v1/reservation/${
            user.user.id
          }/${Number(id)}/${city}/${date}`,
        )
        .then(() => {
          setReserved(true);
        })
        .catch((error) => {
          setLoading(false);
          setErrorMessage(error.response.data.error);
        });
    }
  };

  if (rooms.length > 0) {
    return (
      <ReservationRooms
        date={date}
        city={city}
        rooms={rooms}
        setRooms={setRooms}
        setLoadingFirst={setLoading}
      />
    );
  }

  if (reserved) {
    return <Navigate replace to="/reservations" />;
  }

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center pt-5`}
    >
      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a room</h2>
      <p className={`${styles.zindex} fs-5 text-white`}>
        Get a fancy room for your next big vacation!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Choose a city and a reservation date!
      </p>
      <form
        className={`${styles.zindex} ${styles.form} d-flex justify-content-around mb-5 align-items-end`}
        onSubmit={Number(id) ? reserveRoom : findRooms}
      >
        <div>
          <label htmlFor="city" className="form-label text-white ms-3">
            Your city:
          </label>
          <input
            id="city"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="City"
            aria-label=".form-control-lg example"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label text-white ms-3">
            Reservation date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Date"
            aria-label=".form-control-lg example"
            value={date}
            min={today}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {loading ? (
          <button
            type="submit"
            className={`${styles.btn} btn disabled px-4 ms-4`}
          >
            <i className="fa-solid fa-spinner fa-spin" />
          </button>
        ) : (
          <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
            {Number(id) ? 'Reserve' : 'Next'}
          </button>
        )}
      </form>
      <p className={`${styles.zindex} ${styles.errorMsg}`}>{errorMessage}</p>
    </div>
  );
};

export default Reserve;
