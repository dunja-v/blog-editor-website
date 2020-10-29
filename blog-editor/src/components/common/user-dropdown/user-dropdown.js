import React from 'react';
import './user-dropdown.css';
import { Dropdown, Image, Container, Row, Col } from 'react-bootstrap'
import { useUserContext } from '../../../data/context/user-context';
import defaultUserImage from '../../../images/user.png';

export function UserDropdown(props) {
    const user = useUserContext();

    return <Dropdown className="user-menu">
        <Dropdown.Toggle as={Container} className="user-menu-button">
            <Image src={user.image ? user.image : defaultUserImage} className="user-image" roundedCircle /> 
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#">
                <Row>
                    <Col>
                        <Image src={defaultUserImage} className="user-image" roundedCircle />
                    </Col>
                    <Col>
                        {user.name}
                    </Col>
                </Row>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href="#">New Story</Dropdown.Item>
            <Dropdown.Item href="#">Stories</Dropdown.Item>
            <Dropdown.Item href="#">Stats</Dropdown.Item>        
        </Dropdown.Menu>
    </Dropdown>
}