import React from 'react';
import './App.css';
import PageHeader from './components/page-header/page-header';
import ArticleSummaryListItem from './components/article-summary-list/article-summary-list-item/article-summary-list-item';

function App() {
  return (
    <div>
    <PageHeader/>
    <ArticleSummaryListItem title={"Title"} summary={"This is some text."} />
    </div>
  );
}

export default App;
