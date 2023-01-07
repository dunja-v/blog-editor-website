import { useState, useEffect } from 'react';
import { ArticleSummaryList, HighlightArticle } from '../../components';
import { getArticles, getAuthors } from '../../api';
import { ArticleModel, AuthorModel } from '../../data/models';
import "./home-page.css"

export function HomePage() {
  const [articles, setArticles] = useState([] as ArticleModel[]);
  const [rightHightlightArticle, setRightHighlightArticle] = useState({} as ArticleModel);
  const [leftHightlightArticle, setLeftHighlightArticle] = useState({} as ArticleModel);

  useEffect(() => {
    let authors: AuthorModel[];
    getAuthors().then((loadedAuthors) => authors = Object.assign({}, ...loadedAuthors.map((author: any) => ({[author.id]: author}))));

    getArticles().then((loadedArticles) => {
      // TODO what if there's no author
      loadedArticles.map((article: any) => article.authorName = authors[article.author].name);
      
      setRightHighlightArticle(loadedArticles[0]);
      setLeftHighlightArticle(loadedArticles[1]);
      setArticles(loadedArticles.slice(2,5));
    });
  }, []);

  return (
    <section className="HomePage-articleContainer">
        <HighlightArticle article={rightHightlightArticle}/>
        <ArticleSummaryList items={articles} />
        <HighlightArticle article={leftHightlightArticle}/>
    </section>
  );
}