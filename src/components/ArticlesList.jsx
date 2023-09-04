import { useEffect, useState } from "react"
import { getArticles } from "../utils/api";
import ArticleMiniCard from "./ArticleMiniCard";

export default function ArticlesList() {

    const [articles, setArticles] = useState([]);
    useEffect(()=> {
        getArticles()
        .then((articles)=> {
            setArticles(articles)
        })
    }, [])
    
    return (
        <div>
            <ul>
            {articles.map(article => {
                return <ArticleMiniCard key={article.article_id} article={article}/>
            })}
            </ul>
        </div>
    )
}