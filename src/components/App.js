import '../App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Rooms from './Rooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/room/:id" element={<div>Room</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
