import ArticlesList from "./ArticlesList";



export default function ArticleCard({article}) {
    return (
        <div className="article_view"> 
            <h3>{article.title}</h3>
            <div>by <b>{article.author}</b> in <a href="">{article.topic}</a></div>
            <div> {article.created_at} </div>
            <hr></hr>
            <p>
                {article.body}
            </p>
        </div>
    )
}