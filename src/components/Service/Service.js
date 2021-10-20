import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

//service card component for home page
const Service = (props) => {

    // destructuring object from props 
    const {id, title, img, desc} = props.service;

    // use history hook
    const history = useHistory();
    const url = `/services/service/${id}`;

    // button click handler
    const handleUrl = ()=>{
        history.push(url)
    }

    return (
        <div className="col-md-4 p-3 service-card">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100)}
                    </Card.Text>
                    <Button className="site-btn" onClick={handleUrl}>View Details <i className="fas fa-chevron-right ms-2"></i></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;