import React, { useState, useEffect } from 'react';
import { getArticle, getAuthor } from '../../api';
import { useParams } from "react-router-dom";
import { Image, Row, Col } from 'react-bootstrap'
import './article-page.css';
import { Link } from "react-router-dom";
import { ArticleModel } from '../../data/models';

export function ArticlePage() {
  const [article, setArticle] = useState({} as ArticleModel);
  const date = new Date(article.date);

  const { articleId } = useParams<{articleId: string}>();
  const articleIdAsNumber = parseInt(articleId);

  useEffect(() => {
    // TODO what if article doesn't exist
    getArticle(articleIdAsNumber).then((loadedArticle) => {
      getAuthor(loadedArticle.author).then((author) => {
        loadedArticle.authorName = author.name
        setArticle(loadedArticle);
      });
    });    
  }, [articleId, articleIdAsNumber]);

    return (
      <Row>
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>
          <div>
            <h2 className="articleTitle">{article.title}</h2>
            <div className="articleMetadata">
              <h5>
                <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
              </h5>
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
