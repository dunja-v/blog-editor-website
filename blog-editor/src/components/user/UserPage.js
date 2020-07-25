import React from 'react';
import { Row, Col } from 'react-bootstrap'

export function UserPage() {    
  
      return (
          <Row>
            <Col></Col>
            <Col xs={10} sm={10} md={8} lg={8}>
                <Row><h2>Username</h2></Row>
                <Row>This is user summary</Row>
                <Row><h5>Articles</h5></Row>
            </Col>
            <Col></Col>
          </Row>
      );
  }