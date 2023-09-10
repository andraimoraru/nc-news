import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticlesByTopic from "./ArticlesByTopic";

export default function TopicCard({topic}) {

    const [articles, setArticles]= useState([]);

    useEffect(() => {
        getArticlesByTopic(topic.slug)
        .then((articles) => {
            setArticles(articles)
        });
    }, []);


    return (
        <div className="card_articles">

                <div>{topic.slug}</div>
                <div>{topic.description}</div>  
                <Link to ={`/articles?topic=${topic.slug}`} topic={topic} key={articles.article_id}>
                        See all ...
                </Link> 

        </div>
    );
};