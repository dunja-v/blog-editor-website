import React from 'react';
import { Card } from 'react-bootstrap';
import { ArticleModel } from '../../data/models';

type ArticleSummaryProps = {
    article: ArticleModel,
};

export function ArticleSummary(props: ArticleSummaryProps) {
    const article = props.article;

    return (
        <Card>
            <Card.Img variant="top" src={article.image} />
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
            </Card.Body>
        </Card>
    )    
};
