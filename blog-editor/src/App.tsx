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
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/author/:authorId" element={<AuthorPage />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </UserContextProvider>
    </Container>
  );
}

export default App;
