import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

// service details component for each services
const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);

    const [service, setService] = useState([]);

    //user effect hook for loading external data
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, []);

    useEffect(()=>{
        const result = services.find(sr=>sr.id===serviceId);
        setService(result);
    }, [services]);

    //dynamic title change option for each service
    document.title =` Dental Care -  ${service?.title}`;
    
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