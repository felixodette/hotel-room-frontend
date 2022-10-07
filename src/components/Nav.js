/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';

const Nav = () => (
  <>
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">

          <a href="/" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
            <span>Home</span>
          </a>
          <a href="/room-new" className="list-group-item list-group-item-action py-2 ripple ">
            <span>Add Room</span>
          </a>
          <a href="/room-delete" className="list-group-item list-group-item-action py-2 ripple">
            <span>Delete Room</span>
          </a>
          <a href="/user" className="list-group-item list-group-item-action py-2 ripple">
            <span>Add User</span>
          </a>
          <a href="/reservations-new" className="list-group-item list-group-item-action py-2 ripple">
            <span>Make Reservations</span>
          </a>
        </div>

      </div>
      <div className="card-footer bg-transparent border-0 fixed-bottom">
        <GrFacebookOption className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2" />
        <FaTwitter className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2" />
        <AiFillLinkedin className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2" />
      </div>
    </nav>

    <nav id="main-navbar" className="navbar navbar-expand-lg fixed-top">

      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <a className="navbar-brand" href="/">
          <img
            src=""
            height="25"
            alt="Logo"
            loading="lazy"
          />
        </a>
      </div>

    </nav>
  </>
);

export default Nav;