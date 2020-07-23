import React, { useState, useEffect } from 'react';
import ArticleSummaryList from './article-summary-list/article-summary-list';
import { getArticles } from '../../api/articleApi';
import HightlightArticle from './highlight-article/highlight-article';
import { Container, Row, Col } from 'react-bootstrap'

export function HomePage() {
  const [articles, setArticles] = useState([]);
  const [hightlightArticle, setHighlightArticle] = useState({});

  useEffect(() => {
    getArticles().then((loadedArticles) => {
      setArticles(loadedArticles);
      setHighlightArticle(loadedArticles[0]);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <HightlightArticle article={hightlightArticle}/>
        </Col>
        <Col>
          <ArticleSummaryList items={articles} />
        </Col>
        <Col>
          <HightlightArticle article={hightlightArticle}/>
        </Col>
      </Row>
    </Container>
  );
}