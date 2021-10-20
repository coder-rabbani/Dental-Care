import React from 'react';
import Hero from '../Hero/Hero';
import banner from '../../images/hero-banner.jpg'
import Services from '../Services/Services';
import Galleries from '../Galleries/Galleries';
import Progress from '../Progress/Progress';

//main home component
const Home = () => {
    return (
        <div>
            <Hero img={banner} title="Let us brighten your smile!" subTitle="Better Teeth, Better Health"></Hero>
            <Services></Services>
            <Galleries></Galleries>
            <Progress></Progress>
        </div>
    );
};

export default Home;