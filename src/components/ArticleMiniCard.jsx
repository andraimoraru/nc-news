export default function ArticleMiniCard({article}) {
    return (

      

            <div key={article.article_id} className="card_articles">
                <div className="pic">
                    <img src={article.article_img_url} alt={article.article_topic}></img> 
                </div>
                
                <div className="about">
                    <div className="details">
                        <div className="avatar"><img width={20} height={20} src={article.article_img_url} alt={article.article_topic}></img> </div>
                        <div className="autor">{article.author}</div>
                        <div className="date">{article.created_at}</div>
                    </div>
                    
                    <div className="title">{article.title}</div>
                    <div className="more"><button>Read more...</button></div>

                </div>
                
            </div>

    )
}