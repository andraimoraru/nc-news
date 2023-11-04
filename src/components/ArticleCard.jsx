import { Link} from "react-router-dom";

export default function ArticleCard({article}) {
    return (
        <div className="card_topic_article"> 
            <Link to ={`/articles/${article.article_id}`} key={article.article_id}>
                 <h2>  {article.title}</h2>
            </Link>             
            <div>by <b>{article.author}</b> in <a href="">{article.topic}</a></div>
            <div> {new Date(article.created_at).toUTCString()} </div>
        </div>
    );
};