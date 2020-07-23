import React from 'react';
import './article-summary-list-item.css';
import { Image, Row, Col } from 'react-bootstrap'

export default function ArticleSummaryListItem(props) {
    const article = props.article;

    return <div className="articleSummaryListItem">
        <Row>
            <Col>
            <Image src={article.image} fluid/>
            </Col>
            <Col>
                <h3 className="articleSummaryListItemTitle">{article.title}</h3>
                <div className="articleSummaryListItemBody">{article.summary}</div>
            </Col>
        </Row>
    </div>
}