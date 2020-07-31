import React, { useState, useEffect } from 'react';
import { getAuthor, getArticlesByAuthor } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap'
import defaultUserImage from '../../images/user.png';
import './author-page.css';
import { ArticleSummary } from './article-summary/article-summary';
import { Link } from "react-router-dom";

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
        <Row className="authorContainer">
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
                (<Link to={"/article/" + article.id} className="textLink">
                    <ArticleSummary article={article} />
                </Link>)
            )}
        </Col>
        <Col></Col>
        </Row>
    );
}
