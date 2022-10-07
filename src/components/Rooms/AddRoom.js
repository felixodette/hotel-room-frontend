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
    <div id="add-room-container" className="container-fluid d-flex flex-column align-items-center">
      <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">Add Room</h2>
      <hr id="add-room-hr" />
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
        id="add-room-form"
        className="col-md-6 d-flex align-items-center flex-column justify-content-center"
        onSubmit={submitRoom}
      >
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="name" className="text-white  col-12">
            Room Name:
            {' '}
            <br />
            <input
              id="name"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="Deluxe Double Room"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

        </div>
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="description" className="text-white col-12">
            Room Description:
            {' '}
            <br />
            <input
              id="description"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required

            />
          </label>

        </div>
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="image" className="text-white col-12">
            Room Image:
            {' '}
            <br />
            <input
              id="image"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </label>

        </div>
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="size" className="text-white col-12">
            Room Size:
            {' '}
            <br />
            <input
              id="size"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="In square meter"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </label>

        </div>
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="view" className="text-white col-12">
            Room View:
            {' '}
            <br />
            <input
              id="view"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="Sea, ocean.."
              value={view}
              onChange={(e) => setView(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="col-10 d-flex align-items-center flex-column justify-content-center mb-3">
          <label htmlFor="bedding" className="text-white col-12">
            Bedding Option:
            {' '}
            <br />
            <input
              id="bedding"
              className="col-12 bg-transparent-add-room rounded"
              type="text"
              placeholder="Double, triple, twin..."
              value={bedding}
              onChange={(e) => setBedding(e.target.value)}
              required
            />
          </label>

        </div>
        <button type="submit" id="add-form-btn">
          Submit
        </button>
      </form>
      <span>
        {message}
      </span>
    </div>
  );
}
export default AddRoom;
