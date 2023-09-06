import { useEffect, useState } from "react"
import { getArticles } from "../utils/api";
import ArticleMiniCard from "./ArticleMiniCard";

export default function ArticlesList() {

    const [articles, setArticles] = useState([]);
    const  [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true);
        getArticles()
        .then((articles)=> {
            setArticles(articles);
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading) return <p>Loading ...</p>;

    return (
        <>
            {articles.map((article) => {
                return (
                     <ArticleMiniCard key={article.article_id}
                     article={article}
                      />
)
            })}
        </>
    )
}