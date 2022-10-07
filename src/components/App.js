import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AddRoom from './Rooms/AddRoom';
import Rooms from './Rooms/Rooms';
import DeleteRoom from './Rooms/DeleteRoom';
import AddUser from './user';
import Room from './Rooms/Room';
import Nav from './Nav';

function App() {
  return (
    // make the design responsive only for desktop
    <div className="row m-0 p-0">
      <div className="col-md-2 p-0" style={{ width: '240px' }}>
        <Nav />
      </div>
      <div className="col-md-10 p-0">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rooms />} />
            {/* <Route path="/reservations" element={<MyReservations />} /> */}
            {/* <Route path="/reservations-new" element={<ReservationForm />} /> */}
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
