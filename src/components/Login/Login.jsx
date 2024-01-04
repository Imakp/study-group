import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { Button, Form, Card, Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(null);
    const dispatch = useDispatch();
    const history = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const user = { email, password };
            dispatch(login(user));
            history.push('/');
        } catch (err) {
            setAlert(err.message);
        }
    };

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {alert && <Alert variant="danger">{alert}</Alert>}
                    <Form onSubmit={loginUser}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button disabled={password === '' || email === ''} type="submit" variant="primary">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Login;