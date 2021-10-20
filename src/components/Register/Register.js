import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// user register component
const Register = () => {
    return (
        <div className="container my-5">
            <div className="login mx-auto py-3 px-3 shadow-lg rounded">
                <h3 className="py-3 text-center">Please Register</h3>
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
                    <button className="btn btn-success w-100" type="submit">
                        Register
                    </button>
                </Form>
                <p className="pt-3 confirm-text">Already have an account? <Link to="/login"> Signin Here</Link></p>
            </div>
        </div>
    );
};

export default Register;