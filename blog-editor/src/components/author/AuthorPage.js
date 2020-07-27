import React, { useState, useEffect } from 'react';
import { getAuthor, getArticlesByAuthor } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import './author-page.css';

export function AuthorPage() {
    const [author, setAuthor] = useState({});
    const [authoredArticles, setAuthoredArticles] = useState([]);



    let { authorId } = useParams();
    authorId = parseInt(authorId);

    useEffect(() => {
        // TODO what if author doesn't exist
        getAuthor(authorId).then((loadedAuthor) => {
            setAuthor(loadedAuthor);
        });    
    }, [authorId]);

    useEffect(() => {
        getArticlesByAuthor(authorId).then((loadedArticles) => {
            setAuthoredArticles(loadedArticles);
        });    
    }, [authorId]);
  
    return (
        <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>
            <Row><h2>{author.name}</h2></Row>
            <Row>{author.summary}</Row>
            <Row><h5>Articles</h5></Row>
            {authoredArticles.map((article) => 
                (<Row><h5>{article.title}</h5></Row>)
            )}
        </Col>
        <Col></Col>
        </Row>
    );
}
