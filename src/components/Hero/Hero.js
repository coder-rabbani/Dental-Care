import React from 'react';
import './Hero.css';

//hero component that recive props where invoked
const Hero = ({img, title, subTitle}) => {
    return (
        <div className="hero-carousel pt-5 mt-5">
            <div className="container">
                <div className="row hero-content">
                    <div className="col-md-6 left-content">
                        <h1 className="hero-title">{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="banner">
                            <img className="hero-banner" src={img} alt="hero banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;