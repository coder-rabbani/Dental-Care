import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const {id, title, img, desc} = props.service;
    const history = useHistory();
    const url = `/services/service/${id}`;

    const handleUrl = ()=>{
        history.push(url)
    }
    return (
        <div className="col-md-4 p-3">
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