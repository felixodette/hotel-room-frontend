/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';

// check which page is active and add active class to the link
const activePage = (page) => {
  if (window.location.pathname === page) {
    return 'active';
  }
  return '';
};

const Nav = () => (
  <>
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">

          <a href="/" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/')}`} aria-current="true">
            <span>Home</span>
          </a>
          <a href="/room-new" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/room-new')}`}>
            <span>Add Room</span>
          </a>
          <a href="/room-delete" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/room-delete')}`}>
            <span>Delete Room</span>
          </a>
          <a href="/reservations-new" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/reservations-new')}`}>
            <span>Make Reservations</span>
          </a>
          <a href="/my-reservations" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/my-reservations')}`}>
            <span>My Reservations</span>
          </a>
          <a href="/user" className={`list-group-item list-group-item-action py-2 ripple ${activePage('/user')}`}>
            <span>Login</span>
          </a>
        </div>

      </div>
      <div className="card-footer bg-transparent border-0 fixed-bottom w-25 socials">
        <GrFacebookOption
          onClick={() => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
          }}
          className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2 social-icons"
        />
        <FaTwitter
          onClick={() => {
            window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank');
          }}
          className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2 social-icons"
        />
        <AiFillLinkedin
          onClick={() => {
            window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank');
          }}
          className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle mx-2 p-2 social-icons"
        />
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
            src="https://res.cloudinary.com/wonderwoman/image/upload/v1665273260/3D_gold_crown_logo_-_Made_with_PosterMyWall_n1vleo.png"
            alt="Logo"
            loading="lazy"
          />
        </a>
      </div>

    </nav>
  </>
);

export default Nav;
