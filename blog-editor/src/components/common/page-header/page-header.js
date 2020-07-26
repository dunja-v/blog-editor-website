import React from 'react';
import './page-header.css';
import '../common-styles.css';
import { Link } from "react-router-dom";
import { Row, Navbar, Nav, Container } from 'react-bootstrap'
export function PageHeader(props) {
    return <Container>
        <Row>
            <div className="pageHeader">
                <h1><Link to="/" className="textLink">Blog Editor</Link></h1>
            </div>
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