import React from 'react';
import './highlight-article.css'
import { Image } from 'react-bootstrap'

export default function HighlightArticle(props) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="highlightArticle">
        <Image src={article.image} fluid/>
        <h3 className="highlightArticleTitle">{article.title}</h3>        
        <div className="highlightArticleSummary">{article.summary}</div>
        <div>Published on: {date.toLocaleDateString()}</div>
        <div className="highlightArticleAauthor">Written by: {article.author}</div>
    </div>
}