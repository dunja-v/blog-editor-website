import './article-summary-list.css';
import { ArticleSummaryListItem } from './article-summary-list-item';
import { ArticleModel } from '../../data/models';

type ArticleSummaryListProps = {
    items: ArticleModel[];
}

export function ArticleSummaryList(props: ArticleSummaryListProps) {

    return <div className="articleSummaryList">
        {props.items.map((item, index) => <ArticleSummaryListItem
                    key={"panel-card" + index}
                    article={item} />)
        }
    </div>
}
