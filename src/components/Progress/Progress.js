import React from 'react';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import doctor from '../../images/doctor.png'
import './Progress.css'

//Home progress bar component
const Progress = () => {
    return (
        <div>
            <Container>
                <Row className="progress-area">
                    <Col md={6}>
                        <div>
                            <h4 className="progress-title">Perfect Smile,</h4>
                            <h2 className="progress-title progress-heading fw-bolder">Excellence Defined</h2>
                            <p>Teeth whitening is one of the quickest ways to improve your smile. Many patients are amazed that one trip to DentiCare can change their teeth dramatically.</p>
                        </div>
                        <div className="pb-5">
                            <p>Dental Satisfaction</p>    
                            <ProgressBar variant="success" animated now={90}  label={`${90}%`}/>
                            <p className="pt-3">Success Rate</p>
                            <ProgressBar variant="success" animated now={95}  label={`${95}%`} />
                            <p className="pt-3">Travel Satisfaction</p>
                            <ProgressBar variant="success" animated now={85}  label={`${85}%`} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src={doctor} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Progress;