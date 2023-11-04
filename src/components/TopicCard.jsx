import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";


export default function TopicCard({slug}) {

    const [articles, setArticles]= useState([]);

    useEffect(() => {
        getArticlesByTopic(slug)
        .then((articles) => {
            setArticles(articles)
        });
    }, []);


    return (
        <div className="topics">
                <h2>{slug.toUpperCase()}</h2> 
                <Link to ={`/articles/topic/${slug}`} key={slug}>
                        Check out all {slug} articles
                </Link> 
        </div>
    );
};