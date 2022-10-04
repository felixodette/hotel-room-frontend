import React, { useState } from 'react';

function AddRoom() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [view, setView] = useState('');
  const [bedding, setBedding] = useState('');

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
      .then((response) => response.json());

    setName('');
    setDescription('');
    setImage('');
    setSize('');
    setView('');
    setBedding('');
  };
  return (
    <div>
      <h2>Add Room</h2>
      <form
        onSubmit={submitRoom}
      >
        <div>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              placeholder="Name"
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
    </div>
  );

}
  export default AddRoom;

