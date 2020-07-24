import React, { useState, useEffect } from 'react';
import ArticleSummaryList from './article-summary-list/article-summary-list';
import { getArticles } from '../../api/articleApi';
import HightlightArticle from './highlight-article/highlight-article';
import { Container, Row, Col } from 'react-bootstrap'

export function HomePage() {
  const [articles, setArticles] = useState([]);
  const [rightHightlightArticle, setRightHighlightArticle] = useState({});
  const [leftHightlightArticle, setLeftHighlightArticle] = useState({});

  useEffect(() => {
    getArticles().then((loadedArticles) => {      
      setRightHighlightArticle(loadedArticles[0]);
      setLeftHighlightArticle(loadedArticles[1]);
      setArticles(loadedArticles.slice(2,5));
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <HightlightArticle article={rightHightlightArticle}/>
        </Col>
        <Col>
          <ArticleSummaryList items={articles} />
        </Col>
        <Col>
          <HightlightArticle article={leftHightlightArticle}/>
        </Col>
      </Row>
    </Container>
  );
}