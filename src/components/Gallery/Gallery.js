import React from 'react';
import { Card } from 'react-bootstrap';

//single gallery image component
const Gallery = (props) => {
    const {img} = props.gallery;
    return (

        <div className="col-md-3">
        <Card>
            <Card.Img variant="top" src={img} />
        </Card>
        </div>
    );
};

export default Gallery;