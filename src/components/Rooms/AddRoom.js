import React, { useState } from 'react';
import '../styles/AddRoom.css';

function AddRoom() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [view, setView] = useState('');
  const [bedding, setBedding] = useState('');
  const [message, setMessage] = useState('');

  const submitRoom = (e) => {
    e.preventDefault();
    const room = {
      name,
      description,
      image,
      size,
      view,
      bedding,
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(room),
    };
    fetch('http://localhost:3000/api/v1/rooms/', requestOptions)
      .then((response) => response.json())
      .then(setMessage('Room created'));

    setName('');
    setDescription('');
    setImage('');
    setSize('');
    setView('');
    setBedding('');
    setInterval(() => { setMessage(''); }, 3000);
  };
  return (
    <div id="add-room-container" className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 id="add-room-heading" className="text-center mt-0 mb-0 fw-bold fs-1 text-white text-uppercase">Add Room</h2>
      <hr id="add-room-hr" className="border border-white" />
      <p className="text-center  fs-6 text-white">
        Would you like to rent your hotel room to our website?
        {' '}
        <br />
        No need to wait. Fill the forms below your room will be added to our website accordingly!
        {' '}
        <br />
        And start earn some money today!
      </p>
      <form
        onSubmit={submitRoom}
      >
        <div>
          <label htmlFor="name">
            Room Name:
            <input
              id="name"
              type="text"
              placeholder="Deluxe Double Room"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

        </div>
        <div>
          <label htmlFor="description">
            Room Description:
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

        </div>
        <div>
          <label htmlFor="image">
            Room Image:
            <input
              id="image"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>

        </div>
        <div>
          <label htmlFor="size">
            Room Size:
            <input
              id="size"
              type="text"
              placeholder="In squaremeter"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </label>

        </div>
        <div>
          <label htmlFor="view">
            Room View:
            <input
              id="view"
              type="text"
              placeholder="Sea, ocean.."
              value={view}
              onChange={(e) => setView(e.target.value)}
              required
            />
          </label>

        </div>
        <div>
          <label htmlFor="bedding">
            Bedding Option:
            <input
              id="bedding"
              type="text"
              placeholder="Double, triple, twin..."
              value={bedding}
              onChange={(e) => setBedding(e.target.value)}
              required
            />
          </label>

        </div>
        <button type="submit">
          Add
        </button>
      </form>
      <span>
        {message}
      </span>
    </div>
  );
}
export default AddRoom;
