import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRooms } from '../redux/rooms';

const Rooms = () => {
	const dispatch = useDispatch();
	const rooms = useSelector((state) => state.rooms.rooms);

	useEffect(() => {
		dispatch(getRooms());
	}, [dispatch]);
	return (
		<div>
			<h1>Rooms</h1>
			<h2>Plese select a room</h2>
			<div className="rooms">
				{rooms.map((room) => (
					<div className="room" key={room.id}>
						<img src={room.image} alt={room.name} />
						<div className="room-info">
							<h3>{room.name}</h3>
							<p>{room.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Rooms;
