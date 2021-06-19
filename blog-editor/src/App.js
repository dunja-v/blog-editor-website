import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import { HomePage } from './components/home/HomePage';
import {ArticlePage} from './components/article/ArticlePage';
import {AuthorPage} from './pages/author-page/AuthorPage';
import {PageHeader} from './components/common/page-header/page-header';
import PageNotFound from './pages/PageNotFound';
import { Container } from 'react-bootstrap';
import { UserContextProvider } from './data/context/user-context';

function App() {
  return (
    <Container>
      <UserContextProvider>
        <PageHeader/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/article/:articleId" children={<ArticlePage /> } />
          <Route exact path="/author/:authorId" component={AuthorPage} />
          <Route component={PageNotFound}/>
        </Switch>
      </UserContextProvider>
    </Container>
  );
}

export default App;
