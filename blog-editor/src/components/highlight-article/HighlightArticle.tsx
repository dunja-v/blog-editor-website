import './highlight-article.css'
import '../../common-styles.css';
import { Link } from "react-router-dom";
import { ArticleModel } from '../../data/models';
import { useTranslation } from 'react-i18next';

type HighlightArticleProps = {
    article: ArticleModel,
}

export function HighlightArticle(props: HighlightArticleProps) {
    const article = props.article;
    const date = new Date(article.date);
    const {t} = useTranslation();

    return <article className="highlightArticle">
        <img src={article.image} alt="" className="highlightArticle-image"/>
        <h2 className="highlightArticle-title">
            <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
        </h2>        
        <p>{article.summary}</p>
        {/**TODO replace t with Trans component and localize the date */}
        <div>{t('highlight.article.published') + date.toLocaleDateString()}</div>
        <div>
            <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
        </div>
    </article>
}