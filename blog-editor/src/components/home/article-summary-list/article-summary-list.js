import React from 'react';
import './article-summary-list.css';
import ArticleSummaryListItem from './article-summary-list-item/article-summary-list-item';

export default function ArticleSummaryList(props) {
    console.log(props);

    return <div className="articleSummaryList">
        {props.items.map((item, index) => <ArticleSummaryListItem
                    key={"panel-card" + index}
                    article={item} />)
        }
    </div>
}