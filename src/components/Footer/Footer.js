import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

//footer component
const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="footer-logo">Dental Care</h2>
                        <p>We’re a friendly team of dentists working together to ensure that you receive the best treatment that you require.</p>
                    </div>
                    <div className="col-md-4 footer-items">
                        <h2 className="footer-logo">Useful Links</h2>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/dentists">Our Dentists</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        
                    </div>
                    <div className="col-md-4">
                        <h2 className="footer-logo">Social Networks</h2>
                        <p>Visit DentiCare on these social links.</p>
                        <div>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com"><i className="fab fa-facebook social-icon"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.twitter.com"><i className="fab fa-twitter social-icon"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><i className="fab fa-instagram social-icon"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com"><i className="fab fa-linkedin social-icon"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;