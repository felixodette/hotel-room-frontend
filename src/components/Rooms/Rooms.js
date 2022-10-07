import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

import Carousel from 'react-multi-carousel';
import { getRooms } from '../../redux/rooms';
import 'react-multi-carousel/lib/styles.css';
import './Rooms.css';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  const CustomRightArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '50% 0 0 50%',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <BiRightArrow />
    </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button
      type="button"
      className="btn btn-primary arrows"
      onClick={() => onClick()}
      style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(-50%)',
        zIndex: '1',
        backgroundColor: '#97BF11',
        border: 'none',
        borderRadius: '0 50% 50% 0',
        width: '80px',
        height: '60px',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <BiLeftArrow />
    </button>
  );

  CustomRightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  CustomLeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  return (
    <div className="w-100">
      <h1 className="text-center mt-5 mb-2 pt-5 fw-bold fs-1">ROOMS</h1>
      <h2 className="text-center mt-2 mb-5 fw-bold opacity-50 fs-5">Please select a Room</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container ms-2 me-2 pt-5 pb-5"
        deviceType={responsive.deviceType}
        partialVisible
        swipeable
        showDots
        dotListClass="custom-dot-list-style position-absolute top-50 start-50 translate-middle slide-dots"
        renderDotsOutside
        itemClass="carousel-item-padding-40-px ps-md-4 pe-md-2 rounded-5 room-card"
        slidesToSlide={1}
        arrows
        customRightArrow={<CustomRightArrow onClick={() => {}} />}
        customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {rooms.map((room) => (
          <a href={`/room/${room.id}`} key={room.id} className="text-decoration-none text-dark w-100 h-100">
            <div className="card h-100 border-0 rounded-5 bg-light text-center p-3 p-md-5 transition" key={room.id}>
              <img src={room.image} alt={room.name} className="card-img-top rounded-4 mb-3 mb-md-4 mx-auto room-image" />
              <div className="card-body">
                <h3 className="card-title fw-bold fs-5 mb-3 mb-md-4">{room.name}</h3>
                <p className="card-text fs-6 opacity-50 mb-2 mb-md-3 text-start text-md-center text-lg-start text-xl-center room-description">
                  {' '}
                  {room.description}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
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
            </div>
          </a>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Rooms;
