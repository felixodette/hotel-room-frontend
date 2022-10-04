import React from 'react';

const Rooms = () => {
    const rooms = [
        {
            id: 1,
            name: 'Room 1',
            description: 'Room 1 description',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            name: 'Room 2',
            description: 'Room 2 description',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Room 3',
            description: 'Room 3 description',
            image: 'https://picsum.photos/200/300',
        }
    ];
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