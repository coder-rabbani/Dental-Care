import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

//Login component
const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    // redirect to the target page after login where user wanted to go
    const handleRedirect = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className="my-5 container">
            <div className="login mx-auto py-3 px-3 shadow-lg rounded">
                <h3 className="py-3 text-center">Please Sign In</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <button className="btn btn-success w-100">
                        Sign In
                    </button>
                </Form>
                <p className="pt-3 text-center mb-2">OR</p>
                <button className="mt-2 btn btn-danger w-100" onClick={handleRedirect}>Sign In with Google</button>
                <p className="pt-3 confirm-text">Create a new account <Link to="/register"> Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;