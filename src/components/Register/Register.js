import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// user register component
const Register = () => {
    return (
        <div className="login mx-auto py-5 px-3">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Phone no" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Re-enter Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p className="pt-3">Already have an account <Link to="/login"> Login Here</Link></p>
        </div>
    );
};

export default Register;