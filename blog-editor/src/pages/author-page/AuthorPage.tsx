import { useState, useEffect } from 'react';
import { getAuthor, getArticlesByAuthor } from '../../api/articleApi';
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap'
import defaultUserImage from '../../images/user.png';
import './author-page.css';
import { ArticleSummary } from '../../components';
import { ArticleModel, AuthorModel } from '../../data/models';


export function AuthorPage() {
    const [author, setAuthor] = useState({} as AuthorModel);
    const [authoredArticles, setAuthoredArticles] = useState([] as ArticleModel[]);

    const { authorId } = useParams<{authorId: string}>();
    const authorIdAsNumber = parseInt(authorId);

    useEffect(() => {
        getAuthor(authorIdAsNumber).then((loadedAuthor) => {
            setAuthor(loadedAuthor);
        });    
    }, [authorId, authorIdAsNumber]);

    useEffect(() => {
        getArticlesByAuthor(authorIdAsNumber).then((loadedArticles) => {
            setAuthoredArticles(loadedArticles);
        });    
    }, [authorId, authorIdAsNumber]);
  
    return (
        <Row className="authorContainer">
        <Col></Col>
        <Col xs={10} sm={10} md={8} lg={8}>            
            <Row>
                {author && // TODO what if author doesn't exist
                    <Col xs={10} sm={10} md={8} lg={8}>
                        <div><h2>{author.name}</h2></div>
                        <div>{author.summary}</div>
                    </Col>
                }
                <Col>
                    <Image src={defaultUserImage} className="author-image" roundedCircle />
                </Col>
            </Row>
            <Row className="articles">
                <h5>Articles</h5>
            </Row>

            {authoredArticles.map((article) => 
                (<Link to={"/article/" + article.id} className="textLink">
                    <ArticleSummary article={article} />
                </Link>)
            )}
        </Col>
        <Col></Col>
        </Row>
    );
}
