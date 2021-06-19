import React from 'react';
import { Image, Container } from 'react-bootstrap';
import { ArticleModel } from '../../data/models/AtricleModel';

type ArticleSummaryProps = {
    article: ArticleModel,
};

export function ArticleSummary(props: ArticleSummaryProps) {
    const article = props.article;

    return (
        <Container>
            <Image src={article.image} fluid />
            <div><h5>{article.title}</h5></div>
            <div>{article.summary}</div>
        </Container>
    )    
};