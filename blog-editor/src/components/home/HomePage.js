import React from 'react';
import ArticleSummaryList from './article-summary-list/article-summary-list';

const items = [
    {
      title: "Title 1",
      summary: "This is my cool article."
    }, 
    {
      title: "Title 2",
      summary: "This is my cooler article."
    },
    {
      title: "Title 3",
      summary: "This is my not cool article."
    }
];

export function HomePage() {
    return (
      <div>
        <ArticleSummaryList items={items} />
      </div>
    );
  }