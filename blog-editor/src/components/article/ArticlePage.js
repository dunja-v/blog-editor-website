import React, { useState, useEffect } from 'react';
import { getArticle, getAuthor } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Image, Row, Col } from 'react-bootstrap'
import './article-page.css';

export function ArticlePage() {
  const [article, setArticle] = useState({});
  const date = new Date(article.date);

  let { articleId } = useParams();
  articleId = parseInt(articleId);

  useEffect(() => {
    // TODO what if article doesn't exist
    getArticle(articleId).then((loadedArticle) => {
      getAuthor(loadedArticle.author).then((author) => {
        loadedArticle.authorName = author.name
        setArticle(loadedArticle);
      });
    });    
  }, [articleId]);

  console.log(article);
    return (
      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>
          <div>
            <h2 className="articleTitle">{article.title}</h2>
            <div className="articleMetadata">
              <h5>{article.authorName}</h5>
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
