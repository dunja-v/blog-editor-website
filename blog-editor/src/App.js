import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import { HomePage } from './components/home/HomePage';
import {ArticlePage} from './components/article/ArticlePage'
import {UserPage} from './components/user/UserPage'
import {PageHeader} from './components/common/page-header/page-header';
import PageNotFound from './components/PageNotFound';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <PageHeader/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/article/:articleId" children={<ArticlePage /> } />
        <Route exact path="/user" component={UserPage} />
        <Route component={PageNotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
