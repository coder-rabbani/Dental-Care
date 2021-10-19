import React from 'react';
import Hero from '../Hero/Hero';
import banner from '../../images/hero-banner.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero img={banner} title="Let us brighten your smile!" subTitle="Better Teeth, Better Health"></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;