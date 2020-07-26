import React from 'react';
import './highlight-article.css'
import '../../common/common-styles.css';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function HighlightArticle(props) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="highlightArticle">
        <Image src={article.image} fluid/>
        <h3 className="highlightArticleTitle">
            <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
        </h3>        
        <div className="highlightArticleSummary">{article.summary}</div>
        <div className="highlightArticleDate">Published on: {date.toLocaleDateString()}</div>
        <div className="highlightArticleAauthor">Written by: {article.authorName}</div>
    </div>
}