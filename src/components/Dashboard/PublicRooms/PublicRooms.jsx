import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PublicRooms = () => {
    const { publicRooms } = useSelector((state) => state.rooms);

    return (
        <div>
            <h2>Public Study Rooms</h2>
            <div className="d-flex flex-wrap">
                {publicRooms.map((room) => (
                    <Card key={room._id} className="mx-2 my-2">
                        <Card.Body>
                            <Card.Title>{room.roomName}</Card.Title>
                            <Card.Text>{room.description}</Card.Text>
                            <Card.Text>Capacity: {room.capacity}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/room/${room._id}`}>Go to Room</Link>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PublicRooms;