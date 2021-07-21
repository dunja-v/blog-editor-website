import React from 'react';
import './user-dropdown.css';
import { Dropdown, Image, Container, Row } from 'react-bootstrap';
import { useUserContext } from '../../data/context/UserContext';
import defaultUserImage from '../../images/user.png';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function UserDropdown() {
    const user = useUserContext();
    const {t} = useTranslation();

    return <Dropdown className="user-menu">
        <Dropdown.Toggle as={Container} className="user-menu-button">
            <Image src={user.image ? user.image : defaultUserImage} className="user-image" roundedCircle /> 
        </Dropdown.Toggle>
        <Dropdown.Menu className="user-menu-dropdown">
            <Dropdown.Item as={Link} to={"/author/" + user.id}>
                <Row className="user-link-item" >
                        <Image src={defaultUserImage} className="user-image" roundedCircle />
                        <div>{user.name}</div>
                </Row>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item href="#">{t('user.dropdown.create')}</Dropdown.Item>
            <Dropdown.Item href="#">{t('user.dropdown.list')}</Dropdown.Item>
            <Dropdown.Item href="#">{t('user.dropdown.stats')}</Dropdown.Item>        
        </Dropdown.Menu>
    </Dropdown>
}