import React, { useState, useEffect } from 'react';
import ArticleSummaryList from './article-summary-list/article-summary-list';
import { getArticles } from '../../api/articleApi';
import HightlightArticle from './highlight-article/highlight-article';

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
    <div>
      <HightlightArticle article={hightlightArticle}/>
      <ArticleSummaryList items={articles} />
    </div>
  );
}