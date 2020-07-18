import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import { HomePage } from './components/home/HomePage';
import {ArticlePage} from './components/article/ArticlePage'
import {PageHeader} from './components/page-header/page-header';

function App() {
  return (
    <div>
      <PageHeader/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/article" component={ArticlePage} />
    </div>
  );
}

export default App;
