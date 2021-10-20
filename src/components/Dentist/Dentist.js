import React from 'react';
import { Card } from 'react-bootstrap';

//single dentist cart component
const Dentist = ({title, img, position}) => {
    return (
        <div className="col-md-4 p-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {position}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Dentist;