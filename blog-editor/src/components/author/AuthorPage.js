import React, { useState, useEffect } from 'react';
import { getAuthor } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import './author-page.css';

export function AuthorPage() {
    const [author, setAuthor] = useState({});

    let { authorId } = useParams();
    authorId = parseInt(authorId);

    useEffect(() => {
        // TODO what if author doesn't exist
        getAuthor(authorId).then((loadedAuthor) => {
            setAuthor(loadedAuthor);
        });    
    }, [authorId]);
  
    return (
        <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>
            <Row><h2>{author.name}</h2></Row>
            <Row>This is user summary</Row>
            <Row><h5>Articles</h5></Row>
        </Col>
        <Col></Col>
        </Row>
    );
}
