import React from 'react';
import { Image, Container } from 'react-bootstrap'

export function ArticleSummary(props) {
    const article = props.article;

    return (
        <Container>
            <Image src={article.image} fluid />
            <div><h5>{article.title}</h5></div>
            <div>{article.summary}</div>
        </Container>
    )    
}