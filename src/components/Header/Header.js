import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

//Header component
const Header = () => {
    const {user, logOut} =useAuth();
    return (
        <>
        <Navbar fixed="top" bg="light" variant="light" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="logo" as={Link} to="/">Dental Care</Navbar.Brand> 
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="mx-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/dentists">Dentists</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>

                {/* authentication buttons */}
                <Navbar.Text>
                    {
                    user?.email? <><span>{user.displayName} </span>
                    <Button onClick={logOut} variant="success">Log out</Button></>
                    :
                    <Link to="/login"><Button variant="success">Sign in</Button></Link>
                    } 
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;