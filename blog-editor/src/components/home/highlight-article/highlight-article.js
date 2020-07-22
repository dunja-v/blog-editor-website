import React from 'react';
import './highlight-article.css'

export default function HighlightArticle(props) {
    const article = props.article;

    return <div className="highlightArticle">
        <h3 className="highlightArticleTitle">{article.title}</h3>
        <div className="highlightArticleSummary">{article.summary}</div>
        <div className="highlightArticleAauthor">Written by: {article.author}</div>
    </div>
}