import { getArticlesByTopic } from "../utils/api";
import { useEffect, useState } from "react";

export default function ArticlesByTopic({topic}) {

    const [articles, setArticles]= useState([]);
    console.log('articlesbytopic',topic);

    useEffect(() => {
        getArticlesByTopic(topic.slug)
        .then((articlesFromApi) => {
            setArticles(articlesFromApi)
        });
    }, []);

    return (
         <>
         I am here
         </>
    )
}