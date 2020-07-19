import React, { useState, useEffect } from 'react';
import ArticleSummaryList from './article-summary-list/article-summary-list';
import { getArticles } from '../../api/articleApi';

export function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((loadedArticles) => setArticles(loadedArticles));
  }, []);

  return (
    <div>
      <ArticleSummaryList items={articles} />
    </div>
  );
}