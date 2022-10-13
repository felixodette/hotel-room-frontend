import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/DeleteRoom.css';
import { getReservations } from '../../redux/reservations';
import { getRooms } from '../../redux/rooms';

const MyReservations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('id')) {
      const id = localStorage.getItem('id');
      dispatch(getReservations(id));
      dispatch(getRooms());
    }
  }, []);
  const reservations = useSelector((state) => state.reservations.reservations) || [];
  const rooms = useSelector((state) => state.rooms.rooms) || [];

  if (!localStorage.getItem('id')) {
    return (
      <div id="delete-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5">
        <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">You are not logged in</h2>
        <hr id="add-room-hr" />
        <p className="text-center  fs-6 text-white">
          Please log in to see your reservations
        </p>
      </div>
    );
  }
  return (
    <div id="delete-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5">
      <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">My Reservations</h2>
      <hr id="add-room-hr" />
      <p className="text-center  fs-6 text-white">
        Here you can see all your reservations
        {' '}
      </p>
      <table className="table w-50 table-hover" id="delete-room-table">
        <thead>
          <tr>
            <th scope="col" className="text-white">ID</th>
            <th scope="col" className="text-white">Rooms Name</th>
            <th scope="col" className="text-white">Reservation Date</th>
            <th scope="col" className="text-white">City</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="room">
              <td><p className="text-white mt-3" id="room-name">{reservation.id}</p></td>
              <td><p className="text-white mt-3" id="room-name">{rooms.find((room) => room.id === reservation.room_id).name}</p></td>
              <td><p className="text-white mt-3" id="room-name">{reservation.date}</p></td>
              <td><p className="text-white mt-3" id="room-name">{reservation.city}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyReservations;
