import App from './App';
import {PageHeader} from './components';
import { PageNotFound, HomePage, ArticlePage, AuthorPage } from './pages';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./pages/home-page/HomePage');
jest.mock('./components/page-header');
jest.mock('./pages/article-page/ArticlePage');
jest.mock('./pages/author-page/AuthorPage');
jest.mock('./pages/PageNotFound');

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    // Arrange
    (PageHeader as jest.Mock).mockImplementation(() => <div>PageHeaderMock</div>);
    (HomePage as jest.Mock).mockImplementation(() => <div>HomePageMock</div>);

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
    (PageHeader as jest.Mock).mockImplementation(() => <div>PageHeaderMock</div>);
    (ArticlePage as jest.Mock).mockImplementation(() => <div>ArticlePageMock</div>);

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
    (PageHeader as jest.Mock).mockImplementation(() => <div>PageHeaderMock</div>);
    (AuthorPage as jest.Mock).mockImplementation(() => <div>AuthorPageMock</div>);

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
    (PageHeader as jest.Mock).mockImplementation(() => <div>PageHeaderMock</div>);
    (PageNotFound as jest.Mock).mockImplementation(() => <div>PageNotFoundMock</div>);

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
