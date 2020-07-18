import React from 'react';
import './article-summary-list-item.css';

export default function ArticleSummaryListItem(props) {
    return <div className="articleSummaryListItem">
        <h3 className="articleSummaryListItemTitle">{props.title}</h3>
        <div className="articleSummaryListItemBody">{props.summary}</div>
    </div>
}