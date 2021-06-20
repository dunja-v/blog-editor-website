import {Route, Switch} from "react-router-dom";
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
