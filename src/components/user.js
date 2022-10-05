import React, { useState } from 'react';

function AddUser() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState('');

  const createUser = (e) => {
    e.preventDefault();

    const user = {
      name,
    };

    const userData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    fetch('http://localhost:3001/api/v1/users', userData)
      .then((response) => response.json())
      .then((data) => { localStorage.setItem('id', data.id); localStorage.setItem('name', data.name); })
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
