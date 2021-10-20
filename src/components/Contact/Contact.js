import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

//contact page component
const Contact = () => {
    return (
        <div className="contact-form">
            <div className="contact mx-auto shadow-lg rounded px-4">
                <div>
                    <h2 className="contact-title text-center pb-3 pt-2">Have a Question? Let’s Talk</h2>
                </div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Your Email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="number" placeholder="Your Phone No" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Your Address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3}  placeholder="Your Message" required/>
                    </Form.Group>
                    <div className="mx-auto">
                        <button className="btn btn-success w-100" type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Contact;