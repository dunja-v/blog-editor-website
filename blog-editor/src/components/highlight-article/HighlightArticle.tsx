import React from 'react';
import './highlight-article.css'
import '../../common-styles.css';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ArticleModel } from '../../data/models';

type HighlightArticleProps = {
    article: ArticleModel,
}

export function HighlightArticle(props: HighlightArticleProps) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="highlightArticle">
        <Image src={article.image} fluid/>
        <h3 className="highlightArticleTitle">
            <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
        </h3>        
        <div className="highlightArticleSummary">{article.summary}</div>
        <div className="highlightArticleDate">Published on: {date.toLocaleDateString()}</div>
        <div className="highlightArticleAauthor">
            <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
        </div>
    </div>
}