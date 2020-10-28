import React from 'react';
import './user-dropdown.css';
import { Dropdown, Image, Container } from 'react-bootstrap'
import defaultUserImage from '../../../images/user.png';

export function UserDropdown(props) {

    return <Dropdown className="user-menu">
        <Dropdown.Toggle as={Container} className="user-menu-button">
            <Image src={defaultUserImage} className="user-image" roundedCircle /> 
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
}