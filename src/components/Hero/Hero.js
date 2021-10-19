import React from 'react';
import banner from '../../images/hero-banner.jpg'
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-carousel">
            <div className="container">
                <div className="row hero-content">
                    <div className="col-md-6 left-content">
                        <h1 className="hero-title">Let us brighten your smile!</h1>
                        <p>Better Teeth, Better Health</p>
                    </div>
                    <div className="col-md-6">
                        <div className="banner">
                            <img className="hero-banner" src={banner} alt="hero banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;