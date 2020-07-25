import React, { useState, useEffect } from 'react';
import { getArticle } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Image, Row, Col } from 'react-bootstrap'
import './article-page.css';

export function ArticlePage() {
  const [article, setArticle] = useState({});
  const date = new Date(article.date);

  let { articleId } = useParams();
  articleId = parseInt(articleId);

  useEffect(() => {
    getArticle(articleId).then((article) => {
      setArticle(article); // TODO what if article doesn't exist
    });
  }, [articleId]);

    return (
      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>
          <div>
            <h2 className="articleTitle">{article.title}</h2>
            <div className="articleMetadata">
              <h5>{article.author}</h5>
              <h5>{date.toLocaleDateString()}</h5>
            </div>
            <Image src={article.image} fluid/>
            <div className="articleText">{article.text}</div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    );
}