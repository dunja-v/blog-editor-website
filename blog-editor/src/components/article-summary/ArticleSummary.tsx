import { ArticleModel } from '../../data/models';
import "./article-summary.css";

type ArticleSummaryProps = {
    article: ArticleModel,
};

export function ArticleSummary(props: ArticleSummaryProps) {
    const article = props.article;

    return (
        <article className="articleSummary-container">
            <div>
                <h4>{article.title}</h4>
                <p>{article.summary}</p>
            </div>
            <img src={article.image} className="articleSummary-image" alt="" />
        </article>
    )    
};
