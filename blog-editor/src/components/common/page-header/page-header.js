import React from 'react';
import './page-header.css';
import '../common-styles.css';
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Nav, Container, Image } from 'react-bootstrap'
import defaultUserImage from '../../../images/user.png';
import { useUserContext } from '../../../data/context/user-context';

export function PageHeader(props) {
    const user = useUserContext();

    return <Container>
        <Row className="pageHeader">

                <Col>
                    <h1><Link to="/" className="textLink">Blog Editor</Link></h1>
                </Col>
                <Col>
                    <Image src={user.image ? user.image : defaultUserImage} className="user-image" roundedCircle />   
                </Col>
        
        </Row>
        <Row>
            <Navbar >
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://github.com/dunja-v/blog-editor-website">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Row>
    </Container>
}