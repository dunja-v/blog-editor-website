import { useState, useEffect } from 'react';
import { getAuthor, getArticlesByAuthor } from '../../api/articleApi';
import { useParams, Link } from "react-router-dom";
import defaultUserImage from '../../images/user.png';
import './author-page.css';
import { ArticleSummary } from '../../components';
import { ArticleModel, AuthorModel } from '../../data/models';


export function AuthorPage() {
    const [author, setAuthor] = useState({} as AuthorModel);
    const [authoredArticles, setAuthoredArticles] = useState([] as ArticleModel[]);

    const { authorId } = useParams<{authorId: string}>();
    const authorIdAsNumber = authorId ? parseInt(authorId) : null;

    useEffect(() => {
        if(!authorIdAsNumber) {
            return;
        }

        getAuthor(authorIdAsNumber).then((loadedAuthor) => {
            setAuthor(loadedAuthor);
        });    
    }, [authorIdAsNumber]);

    useEffect(() => {
        if(!authorIdAsNumber) {
            return;
        }

        getArticlesByAuthor(authorIdAsNumber).then((loadedArticles) => {
            setAuthoredArticles(loadedArticles);
        });    
    }, [authorIdAsNumber]);
  
    return (
        <div className="authorPage-container">
        <div></div>
        <div>            
            {author && // TODO what if author doesn't exist
                <div className="authorPage-autorInfo-container">
                    <div>
                        <h2>{author.name}</h2>
                        <p>{author.summary}</p>
                    </div>
                    <div className="authorPage-autorInfo-imageContainer">
                        <img src={defaultUserImage} className="authorPage-autorInfo-image" alt="" />
                    </div>
                </div>
            }
            <section>
                <h3 className='authorPage-articles-title'>Articles</h3>

                {authoredArticles.map((article) => 
                    (<Link to={"/article/" + article.id} className="textLink" key={article.id}>
                        <ArticleSummary article={article} />
                    </Link>)
                )}
            </section>
        </div>
        <div></div>
        </div>
    );
}
