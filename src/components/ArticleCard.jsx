export default function ArticleCard({article}) {
    return (
        <div className="card_topic_article"> 
            <h3>{article.title}</h3>
            <div>by <b>{article.author}</b> in <a href="">{article.topic}</a></div>
            <div> {new Date(article.created_at).toUTCString()} </div>
        </div>
    );
};