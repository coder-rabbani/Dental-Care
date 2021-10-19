import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Dentist from '../Dentist/Dentist';
import banner from '../../images/about.png'
import doctor1 from '../../images/doctor1.jpg'
import doctor2 from '../../images/doctor2.jpg'
import doctor3 from '../../images/doctor3.jpg'
import doctor4 from '../../images/doctor4.jpg'

import Hero from '../Hero/Hero';

const Dentists = () => {
    return (
        <Container>
            <Row className="mb-5">
                <Hero img={banner} title="Meet Our Doctors"></Hero>
                <Dentist img={doctor1} title="Dr. Jeison Smith" position="Dentist-Orthodontist"></Dentist>
                <Dentist img={doctor3} title="Dr. Alex Coredero" position="Dental Therapist"></Dentist>
                <Dentist img={doctor4} title="Dr. Simona Willams" position="Dental Assistant"></Dentist>
                <Dentist img={doctor2} title="Dr. Sheila Coredero" position="Dentist, Oral surgeon"></Dentist>
                <Dentist img={doctor4} title="Dr. Simona Willams" position="Dental Assistant"></Dentist>
                <Dentist img={doctor3} title="Dr. Alex Coredero" position="Dental Therapist"></Dentist>
            </Row>
        </Container>
    );
};

export default Dentists;