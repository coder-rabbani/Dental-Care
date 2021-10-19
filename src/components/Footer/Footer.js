import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="footer-logo">Dental Care</h2>
                        <p>We’re a friendly team of dentists working together to ensure that you receive the best treatment that you require.</p>
                    </div>
                    <div className="col-md-4">
                        <h2 className="footer-logo">Useful Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Our Dentists</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2 className="footer-logo">Social Networks</h2>
                        <p>Visit DentiCare on these social links.</p>
                        <div>
                            <i className="fab fa-facebook social-icon"></i>
                            <i className="fab fa-twitter social-icon"></i>
                            <i className="fab fa-instagram social-icon"></i>
                            <i className="fab fa-linkedin social-icon"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;