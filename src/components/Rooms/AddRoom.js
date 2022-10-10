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

    function notify(response) {
      if (response === 201) {
        setMessage(<div className="add-room-success-notification border mt-1 bg-dark rounded p-1">Room successfully created!</div>);
      } else {
        setMessage(<div className="add-room-error-notification border mt-1 bg-dark text-danger rounded p-1">ERROR: Room could not be created!</div>);
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(room),
    };
    fetch('http://localhost:3000/api/v1/rooms/', requestOptions)
      .then((response) => notify(response.status));

    setName('');
    setDescription('');
    setImage('');
    setSize('');
    setView('');
    setBedding('');
    setInterval(() => { setMessage(''); }, 5000);
  };
  return (
    <div id="add-room-container" className="container-fluid d-flex flex-column align-items-center h-100 mb-5">
      <h2 id="add-room-heading" className="text-center  mt-5 fw-bold fs-1 text-white text-uppercase">Add Room</h2>
      <hr id="add-room-hr" />
      <p className="text-center  fs-6 text-white">
        Would you like to sell your hotel room to our website?
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
        <label htmlFor="name" className="text-white  col-md-8 mb-3">
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
            maxLength="50"
            required
          />
        </label>

        <label htmlFor="description" className="text-white  col-md-8 mb-3">
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
            minLength="10"
            required
          />
        </label>

        <label htmlFor="image" className="text-white  col-md-8 mb-3">
          Room Image:
          {' '}
          <br />
          <input
            id="image"
            className="col-12 bg-transparent-add-room rounded"
            type="url"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>

        <label htmlFor="size" className="text-white  col-md-8 mb-3">
          Room Size:
          {' '}
          <br />
          <input
            id="size"
            className="col-12 bg-transparent-add-room rounded"
            type="number"
            placeholder="In square meter"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </label>

        <label htmlFor="view" className="text-white  col-md-8 mb-3">
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
        <label htmlFor="bedding" className="text-white  col-md-8 mb-3">
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
        <button type="submit" className="fw-bold" id="add-room-submit-btn">
          Submit
        </button>

      </form>
      <span className="">
        {message}
      </span>
    </div>
  );
}
export default AddRoom;
