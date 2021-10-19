import React from 'react';
import Hero from '../Hero/Hero';
import banner from '../../images/hero-banner.jpg'
import Services from '../Services/Services';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Hero img={banner} title="Let us brighten your smile!" subTitle="Better Teeth, Better Health"></Hero>
            <Services></Services>
            <div className="mb-5">
                <h2 className="text-center pb-3">Our Gallery</h2>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1593022356769-11f762e25ed9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                        <div className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;