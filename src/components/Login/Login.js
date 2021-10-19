import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="w-25 mx-auto py-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg">
                    Sign In
                </Button>
            </Form>
            <Button className="mt-2" onClick={signInUsingGoogle} variant="danger">Sign In with Google</Button>
        </div>
    );
};

export default Login;