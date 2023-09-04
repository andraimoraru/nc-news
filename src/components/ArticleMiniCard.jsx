export default function ArticleMiniCard({article}) {
    return (
        <div key={article.article_id}>
            <div>
            <h2>{article.author}</h2>
            <h3>{article.title}</h3>   
            </div>
            <div>
            <img src={article.article_img_url} alt={article.article_topic}></img>    
            </div>    
        </div>
    )
}