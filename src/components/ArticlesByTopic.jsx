import { getArticlesByTopic } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TopicCard from "./TopicCard";
import ArticleCard from "./ArticleCard";

export default function ArticlesByTopic() {
    let { slug } = useParams();

    const [articles, setArticles]= useState([]);
    console.log('slug',slug);

    useEffect(() => {
        getArticlesByTopic(slug)
        .then((articlesFromApi) => {
            setArticles(articlesFromApi)
        });
    }, []);
    console.log(articles)

    return (
    <>
    {articles.map((article) => {
            return (
                <ArticleCard key={article.title} />
            )
    })}
    </>
    )
}