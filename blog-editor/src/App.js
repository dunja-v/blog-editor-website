import React from 'react';
import './App.css';
import PageHeader from './components/page-header/page-header';
import ArticleSummaryList from './components/article-summary-list/article-summary-list';

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

function App() {
  return (
    <div>
      <PageHeader/>
      <ArticleSummaryList items={items} />
    </div>
  );
}

export default App;
