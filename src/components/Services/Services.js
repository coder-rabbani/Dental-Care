import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

//services component
const Services = () => {
    //use state hook for state declaring
    const [services, setServices] = useState([]);

    //use effect hook for external data load
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <Container>
            <Row className="mb-5">
                <div className="mt-5 mb-3">
                    <h2 className="text-center">Our Dental Services</h2>
                </div>
                {
                    services.map(service=><Service service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;