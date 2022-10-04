import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    const user = {
      name,
    };

    const userData = {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    axios.post('http://localhost:3001/api/v1/users', userData)
      .then(setAlert('User created'));

    setName('');
    setInterval(() => { setAlert(''); }, 3000);
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={createUser}>
        <input id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      <span>
        {' '}
        {alert}
        {' '}
      </span>
    </div>
  );
}
export default AddUser;
