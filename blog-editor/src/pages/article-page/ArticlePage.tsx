import { useState, useEffect } from 'react';
import { getArticle, getAuthor } from '../../api';
import { useParams } from "react-router-dom";
import './article-page.css';
import { Link } from "react-router-dom";
import { ArticleModel } from '../../data/models';

export function ArticlePage() {
  const [article, setArticle] = useState({} as ArticleModel);
  const date = new Date(article.date);

  const { articleId } = useParams<{articleId: string}>();
  const articleIdAsNumber = articleId ? parseInt(articleId) : null;

  useEffect(() => {
    if(!articleIdAsNumber) {
      return;
    }

    // TODO what if article doesn't exist
    getArticle(articleIdAsNumber).then((loadedArticle) => {
      getAuthor(loadedArticle.author).then((author) => {
        loadedArticle.authorName = author.name
        setArticle(loadedArticle);
      });
    });    
  }, [articleIdAsNumber]);

    return (
      <div className='articlePage-container'>
        <div></div>
        <section>
            <h2 className="articlePage-articleTitle">{article.title}</h2>
            <div className="articlePage-articleMetadata">
              <h5>
                <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
              </h5>
              <h5>{date.toLocaleDateString()}</h5>
            </div>
            <img src={article.image} alt="" className='articlePage-image'/>
            <div className="articlePage-articleText">{article.text}</div>
        </section>
        <div></div>
      </div>
    );
}
