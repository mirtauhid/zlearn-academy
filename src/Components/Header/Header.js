import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Container fluid className="mainContainer">
                <Row className="rowStyle">
                    <Col md={8}>
                        <img src={logo} alt="" />
                        <h2>zLearn Academy</h2>
                        <p>Best online learning place</p>
                    </Col>
                    <Col md={4}>
                    </Col>
                </Row>

            </Container>
            <nav className="mr-auto navigation mobile-noFixed" >
                <a href>Courses</a>
                <a href>Skill paths</a>
                <a href>Courses enrolled</a>
            </nav>
        </div>
    );
};

export default Header;