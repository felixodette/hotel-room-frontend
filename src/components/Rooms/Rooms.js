import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { getRooms } from '../../redux/rooms';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-center mt-5 mb-2 pt-5 fw-bold fs-1">Rooms</h1>
      <h2 className="text-center mt-2 mb-5 fw-bold opacity-50 fs-5">Please select a Room</h2>
      <Carousel
        responsive={responsive}
        partialVisible={true}
        swipeable={true}
        showDots={true}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style position-absolute top-50 start-50 translate-middle"
        renderDotsOutside={true}
        itemClass="carousel-item-padding-40-px"
      >
        {rooms.map((room) => (
          <a href={`/room/${room.id}`} key={room.id} className="text-decoration-none text-dark">
            <div className="card h-100 shadow border-0 rounded-3 bg-light text-center p-3 p-md-5 transition" key={room.id}>
              <img src={room.image} alt={room.name} className="card-img-top rounded-3 mb-3 mb-md-4 mx-auto" style={{ width: '300px', height: '200px' }} />
              <div className="card-body">
                <h3 className="card-title fw-bold fs-5 mb-3 mb-md-4">{room.name}</h3>
                <p className="card-text fs-6 opacity-50 mb-3 mb-md-4 text-start text-md-center text-lg-start text-xl-center" style={{ fontSize: '1rem' }}>
                  {' '}
                  {room.description}
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <GrFacebookOption className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2" />
                <FaTwitter className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2 mx-2" />
                <AiFillLinkedin className="fs-1 opacity-50 mb-3 mb-md-4 border border-2 border-dark rounded-circle p-2" />
              </div>
            </div>
          </a>
        ))}
      </Carousel>;
    </div>
  );
};

export default Rooms;
