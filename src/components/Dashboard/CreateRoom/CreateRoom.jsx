import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { createRoom } from '../roomSlice';

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('');
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState('');
    const [roomType, setRoomType] = useState('public');
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.rooms);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRoom({ roomName, description, capacity, roomType }));
    };

    return (
        <Row>
            <Col md={6} className="mx-auto">
                <h2>Create a Room</h2>
                {error && <div className="error">{error}</div>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="roomName">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            placeholder="Enter room name"
                        />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter description"
                        />
                    </Form.Group>

                    <Form.Group controlId="capacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            placeholder="Enter capacity"
                        />
                    </Form.Group>

                    <Form.Group controlId="roomType">
                        <Form.Label>Room Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </Form.Control>
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating...' : 'Create'}
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default CreateRoom;