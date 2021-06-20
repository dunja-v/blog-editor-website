import './page-header.css';
import '../../common-styles.css';
import { Link } from "react-router-dom";
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { UserDropdown } from '../user-dropdown/UserDropdown';

export function PageHeader() {
    return <Container>
        <Row className="pageHeader">
                <Col>
                    <h1><Link to="/" className="textLink">Blog Editor</Link></h1>
                </Col>
                <Col>
                    <UserDropdown />  
                </Col>        
        </Row>
        <Row>
            <Navbar >
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="https://github.com/dunja-v/blog-editor-website">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Row>
    </Container>
}