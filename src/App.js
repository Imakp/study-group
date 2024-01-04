// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PublicRooms from './components/Dashboard/PublicRooms/PublicRooms';
import MyStudyRoom from './components/Dashboard/MyStudyRoom/MyStudyRoom';
import CreateRoom from './components/Dashboard/CreateRoom/CreateRoom';

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/public-rooms" component={PublicRooms} />
        <Route path="/my-study-room" component={MyStudyRoom} />
        <Route path="/create-room" component={CreateRoom} />
      </Routes>
    </Router>
 );
}

export default App;