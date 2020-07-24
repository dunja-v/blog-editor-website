import React, { useState, useEffect } from 'react';
import { getArticle } from '../../api/articleApi';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap'

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
      <div>
        <h2>{article.title}</h2>
        <div>
          <h5>{article.author}</h5>
          <h5>{date.toLocaleDateString()}</h5>
        </div>
        <Image src={article.image} fluid/>
        <div>{article.text}</div>
      </div>
    );
}