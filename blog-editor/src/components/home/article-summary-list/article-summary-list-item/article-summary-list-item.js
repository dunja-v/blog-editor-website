import React from 'react';
import './article-summary-list-item.css';
import '../../../common/common-styles.css';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ArticleSummaryListItem(props) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="articleSummaryListItem">
        <Row>
            <Col>
                <Image src={article.image} fluid/>
            </Col>
            <Col>
                <h5 className="articleSummaryListItemTitle">
                    <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
                </h5>
                <div className="articleSummaryListItemBody">{article.authorName}</div>
                <div className="articleSummaryListItemBody">{date.toLocaleDateString()}</div>                
            </Col>
        </Row>
    </div>
}