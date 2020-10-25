import React from 'react';
import App from './App';
import { HomePage } from './components/home/HomePage';
import {ArticlePage} from './components/article/ArticlePage'
import {AuthorPage} from './components/author/AuthorPage'
import {PageHeader} from './components/common/page-header/page-header';
import PageNotFound from './components/PageNotFound';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./components/home/HomePage');
jest.mock('./components/common/page-header/page-header');
jest.mock('./components/article/ArticlePage');
jest.mock('./components/author/AuthorPage');
jest.mock('./components/PageNotFound');

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    // Arrange
    PageHeader.mockImplementation(() => <div>PageHeaderMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);

    // Act
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  test("Should render page header and ArticlePage for article route", () => {
    // Arrange
    PageHeader.mockImplementation(() => <div>PageHeaderMock</div>);
    ArticlePage.mockImplementation(() => <div>ArticlePageMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/article/1']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("ArticlePageMock")).toBeInTheDocument();
  });

  test("Should render page header and AuthorPage for author route", () => {
    // Arrange
    PageHeader.mockImplementation(() => <div>PageHeaderMock</div>);
    AuthorPage.mockImplementation(() => <div>AuthorPageMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/author/1']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("AuthorPageMock")).toBeInTheDocument();
  });

  test("Should render page header and PageNotFound for invalid route", () => {
    // Arrange
    PageHeader.mockImplementation(() => <div>PageHeaderMock</div>);
    PageNotFound.mockImplementation(() => <div>PageNotFoundMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/invalid/route']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
  });
});


