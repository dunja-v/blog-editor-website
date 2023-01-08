import './article-summary-list-item.css';
import '../../../common-styles.css';
import { Link } from "react-router-dom";
import { ArticleModel } from '../../../data/models';

type ArticleSummaryListItemProps = {
    article: ArticleModel;
}

export function ArticleSummaryListItem(props: ArticleSummaryListItemProps) {
    const article = props.article;
    const date = new Date(article.date);

    return <article className="articleSummaryListItem">
            <img src={article.image} alt="" className='articleSummaryListItem-image'/>
            <div>
                <h5 className="articleSummaryListItem-title">
                    <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
                </h5>
                <div>
                    <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
                </div>
                <div className="articleSummaryListItem-date">{date.toLocaleDateString()}</div>                
            </div>
        </article>
}