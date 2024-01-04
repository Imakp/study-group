import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { Button, Form, Card, Alert } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alert, setAlert] = useState(null);
    const dispatch = useDispatch();
    const history = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setAlert('Passwords do not match');
            return;
        }

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
                    <h2 className="text-center mb-4">Register</h2>
                    {alert && <Alert variant="danger">{alert}</Alert>}
                    <Form onSubmit={register}>
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
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button disabled={password === '' || email === '' || confirmPassword === ''} type="submit" variant="primary">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </div>
    );
};

export default Register;