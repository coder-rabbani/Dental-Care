import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact mx-auto py-5 px-3">
            <div>
                <h2 className="contact-title text-center pb-3">Have a Question? Let’s Talk</h2>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;