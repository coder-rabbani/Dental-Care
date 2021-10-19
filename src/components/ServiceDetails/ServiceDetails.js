import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);

    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []);

    useEffect(()=>{
        const result = services.find(sr=>sr.id===serviceId);
        setService(result);
    }, [services]);

    return (
        <div className="mx-auto service-details my-5">
            <img src={service?.img} alt=""/>
            <div className="mt-4">
                <h2>{service?.title}</h2>
                <p>{service?.desc}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;