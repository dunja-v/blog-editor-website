import React, { useState, useEffect } from 'react';
import { getAuthor, getArticlesByAuthor } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap'
import defaultUserImage from '../../images/user.png';
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
            <Row>
                <Col xs={10} sm={10} md={8} lg={8}>
                    <div><h2>{author.name}</h2></div>
                    <div>{author.summary}</div>
                </Col>
                <Col>
                    <Image src={defaultUserImage} className="user-image" roundedCircle />
                </Col>
            </Row>
            <Row className="articles">
                <h5>Articles</h5>
            </Row>

            {authoredArticles.map((article) => 
                (<div className="article">
                    <div><h5>{article.title}</h5></div>
                    <div>{article.summary}</div>
                </div>)
            )}
        </Col>
        <Col></Col>
        </Row>
    );
}
