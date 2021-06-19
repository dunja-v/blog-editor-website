import React, { useState, useEffect } from 'react';
import ArticleSummaryList from '../../components/home/article-summary-list/article-summary-list';
import { getArticles, getAuthors } from '../../api/articleApi';
import HightlightArticle from '../../components/home/highlight-article/highlight-article';
import { Container, Row, Col } from 'react-bootstrap'
import { ArticleModel, AuthorModel } from '../../data/models';

export function HomePage() {
  const [articles, setArticles] = useState([] as ArticleModel[]);
  const [rightHightlightArticle, setRightHighlightArticle] = useState({} as ArticleModel);
  const [leftHightlightArticle, setLeftHighlightArticle] = useState({} as ArticleModel);

  useEffect(() => {
    let authors: AuthorModel[];
    getAuthors().then((loadedAuthors) => authors = Object.assign({}, ...loadedAuthors.map((author: any) => ({[author.id]: author}))));

    getArticles().then((loadedArticles) => {
      // TODO what if there's no author
      loadedArticles.map((article: any) => article.authorName = authors[article.author].name);
      
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