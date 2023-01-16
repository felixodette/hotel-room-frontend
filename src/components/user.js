import React, { useState } from 'react';
import './styles/user.css';

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
    fetch('https://suiteup-backend.onrender.com/api/v1/users', userData)
      .then((response) => response.json())
      .then((data) => { localStorage.setItem('id', data.id); localStorage.setItem('name', data.name); })
      .then(setAlert('User created'));

    setName('');
    setInterval(() => { setAlert(''); }, 3000);
  };
  return (
    <div className="signup container-fluid d-flex flex-column align-items-center justify-content-center h-100 mb-5">
      <h2 className="add-user-header text-center  mt-5 fw-bold fs-1 text-white text-uppercase">Sign Up</h2>
      <form onSubmit={createUser} className="user-form col-md-6 d-flex align-items-center flex-column justify-content-center">
        <label htmlFor="name" className="text-white  col-md-8 mb-3">
          User Name:
          <input id="name" type="text" className="col-12 bg-transparent-add-user rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <button type="submit" className="fw-bold user-submit">Submit</button>
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
