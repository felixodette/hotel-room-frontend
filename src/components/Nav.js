/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Nav = () => (
  <>
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">

          <a href="/" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Home</span>
          </a>
          <a href="/room-new" className="list-group-item list-group-item-action py-2 ripple ">
            <i className="fas fa-chart-area fa-fw me-3" />
            <span>Add Room</span>
          </a>
          <a href="/room-delete" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-lock fa-fw me-3" />
            <span>Delete Room</span>
          </a>
          <a href="/user" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Add User</span>
          </a>
          <a href="/reservations-new" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-pie fa-fw me-3" />
            <span>Make Reservations</span>
          </a>
        </div>
      </div>
    </nav>

    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">

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
