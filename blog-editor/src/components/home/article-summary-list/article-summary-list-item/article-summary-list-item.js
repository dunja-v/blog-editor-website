import React from 'react';
import './article-summary-list-item.css';
import { Image, Row, Col } from 'react-bootstrap'

export default function ArticleSummaryListItem(props) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="articleSummaryListItem">
        <Row>
            <Col>
                <Image src={article.image} fluid/>
            </Col>
            <Col>
                <h5 className="articleSummaryListItemTitle">{article.title}</h5>
                <div className="articleSummaryListItemBody">{article.author}</div>
                <div className="articleSummaryListItemBody">{date.toLocaleDateString()}</div>                
            </Col>
        </Row>
    </div>
}