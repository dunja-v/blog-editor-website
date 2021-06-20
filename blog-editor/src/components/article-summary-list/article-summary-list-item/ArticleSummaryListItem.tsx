import './article-summary-list-item.css';
import '../../../common-styles.css';
import { Image, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ArticleModel } from '../../../data/models';

type ArticleSummaryListItemProps = {
    article: ArticleModel;
}

export function ArticleSummaryListItem(props: ArticleSummaryListItemProps) {
    const article = props.article;
    const date = new Date(article.date);

    return <div className="articleSummaryListItem">
        <Row>
            <Col>
                <Image src={article.image} fluid/>
            </Col>
            <Col>
                <h5 className="articleSummaryListItemTitle">
                    <Link to={"/article/" + article.id} className="textLink">{article.title}</Link>
                </h5>
                <div>
                    <Link to={"/author/" + article.author} className="textLink">{article.authorName}</Link>
                </div>
                <div className="articleSummaryListItemBody">{date.toLocaleDateString()}</div>                
            </Col>
        </Row>
    </div>
}