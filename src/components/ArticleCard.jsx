import { Link} from "react-router-dom";

export default function ArticleCard({article}) {
    return (
        <>
        <div className="card_articles">
            <div className="pic">
                <img src={article.article_img_url} alt={article.article_topic}></img> 
            </div> 
            <div> 
            <Link to ={`/articles/${article.article_id}`} key={article.article_id}>
                 <h2>  {article.title}</h2>
            </Link>             
            <div>by <b>{article.author}</b> in  
                <Link to ={`/articles/topic/${article.topic}`} key={article.topic}>
                    <p>  {article.topic} </p>
                </Link>  
            </div>
            <div> {new Date(article.created_at).toUTCString()} </div>
        </div>
        </div>
      

        </>

    );
};