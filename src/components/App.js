import '../App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AddRoom from './Rooms/AddRoom';
import Rooms from './Rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />} />
        {/* <Route path="/" element={<Room />} /> */}
        {/* <Route path="/reservations" element={<MyReservations />} /> */}
        {/* <Route path="/reservations-new" element={<ReservationForm />} /> */}
        <Route path="/room-new" element={<AddRoom />} />
        {/* <Route path="/room-list" element={<IndexRemoveRoom />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
