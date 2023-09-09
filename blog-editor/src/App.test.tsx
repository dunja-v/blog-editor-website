import App from './App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

jest.mock('./pages/home-page/HomePage', () => ({
  __esModule: true,
  HomePage: () => <div data-testid="HomePageMock" />
}));

jest.mock('./components/page-header', () => ({
  __esModule: true,
  PageHeader: () => <div data-testid="PageHeaderMock" />
}));
jest.mock('./pages/article-page/ArticlePage', () => ({
  __esModule: true,
  ArticlePage: () => <div data-testid="ArticlePageMock" />
}));
jest.mock('./pages/author-page/AuthorPage', () => ({
  __esModule: true,
  AuthorPage: () => <div data-testid="AuthorPageMock" />
}));
jest.mock('./pages/PageNotFound', () => ({
  __esModule: true,
  PageNotFound: () => <div data-testid="PageNotFoundMock" />
}));

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    // Act
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByTestId("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByTestId("HomePageMock")).toBeInTheDocument();
  });

  test("Should render page header and ArticlePage for article route", () => {
    // Act
    render(
      <MemoryRouter initialEntries={['/article/1']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByTestId("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByTestId("ArticlePageMock")).toBeInTheDocument();
  });

  test("Should render page header and AuthorPage for author route", () => {
    // Act
    render(
      <MemoryRouter initialEntries={['/author/1']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByTestId("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByTestId("AuthorPageMock")).toBeInTheDocument();
  });

  test("Should render page header and PageNotFound for invalid route", () => {
    // Act
    render(
      <MemoryRouter initialEntries={['/invalid/route']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByTestId("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByTestId("PageNotFoundMock")).toBeInTheDocument();
  });
});
