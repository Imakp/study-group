import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PublicRooms from './PublicRooms/PublicRooms';
import MyStudyRoom from './MyStudyRoom/MyStudyRoom';
import CreateRoom from './CreateRoom/CreateRoom';

const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <PublicRooms />
                </Col>
                <Col md={4}>
                    <MyStudyRoom />
                </Col>
                <Col md={4}>
                    <CreateRoom />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;