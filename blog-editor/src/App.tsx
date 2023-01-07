import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import { UserContextProvider } from './data/context/UserContext';
import { PageHeader } from './components';
import { ArticlePage, AuthorPage, HomePage, PageNotFound } from './pages';

function App() {
  return (
    <Container>
      <UserContextProvider>
        <PageHeader/>
        <Routes>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/article/:articleId">
            <ArticlePage />
          </Route>
          <Route path="/author/:authorId">
            <AuthorPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Routes>
      </UserContextProvider>
    </Container>
  );
}

export default App;
