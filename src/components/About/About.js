import React from 'react';
import Hero from '../Hero/Hero';
import banner from '../../images/about.jpg';
import aboutBanner from '../../images/about-img.jpg'
import { Image } from 'react-bootstrap';
import './About.css';

//about component
const About = () => {
    return (
        <div className="pb-5">
            <Hero img={banner} title="We'd Love To See You Smile!" subTitle="Be Proud of Your Smile"></Hero>
            <div className="container mt-5">
                <div className="row hero-content">
                    <div className="col-md-5">
                        <Image className="about-img" thumbnail   src={aboutBanner} />
                    </div>
                    <div className="col-md-7 mt-3">
                        <h2>Welcome to a Family Dental Clinic</h2>
                        <p>Dentil Care is a well-established dentist in the heart of Bangladesh providing excellent dentistry for the whole family. Our priority is making you feel comfortable and at ease in a safe and welcoming environment.</p>
                        <p>Professional dental clinic Dental Care offers the whole range of dentistry services: treatment of caries, gum diseases, tooth whitening, implantation, dentures (crowns installation), surgery, occlusion correction (braces) etc. Our dentists will help you solve any dental problem painless and carefully</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;