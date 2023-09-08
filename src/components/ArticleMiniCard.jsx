
import { Link} from "react-router-dom"

export default function ArticleMiniCard({article}) {
    return (
        
            <div key={article.article_id} className="card_articles">
                <div className="pic">
                    <img src={article.article_img_url} alt={article.article_topic}></img> 
                </div>            
                <div className="about">
                    <h3>{article.title}</h3>
                    <div className="details">
                        <div className="autor">by <b>{article.author} </b> 
                        in <Link>{article.topic}</Link> </div>
                        <div className="date">{article.created_at}</div>
                    </div>                  

                    <div className="more">
                        <Link to ={`/articles/${article.article_id}`} key={article.article_id}>
                        Read more ...
                        </Link> 
                    </div>
                </div>               
            </div>
    );
};