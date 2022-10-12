import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import AddRoom from './Rooms/AddRoom';
import Rooms from './Rooms/Rooms';
import DeleteRoom from './Rooms/DeleteRoom';
import AddUser from './user';
import Room from './Rooms/Room';
import Reservation from './Reservations/Reservation';
import UserReservations from './Reservations/UserReservations';

function App() {
  return (
    // make the design responsive only for desktop
    <div className="row m-0 p-0">
      <div className="col-md-2 w-sm-0 p-0">
        <Nav />
      </div>
      <div className="col-md-10 p-0 vh-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rooms />} />
            <Route path="/reservations" element={<UserReservations />} />
            <Route path="/reservations-new" element={<Reservation />} />
            <Route path="/room-new" element={<AddRoom />} />
            <Route path="/room/:id" element={<Room />} />
            {/* <Route path="/room-list" element={<IndexRemoveRoom />} /> */}
            <Route path="/room-delete" element={<DeleteRoom />} />
            <Route path="/user" element={<AddUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
