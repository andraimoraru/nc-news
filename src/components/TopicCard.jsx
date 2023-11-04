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
                <div>{slug}</div> 
                <br></br> 
                <Link to ={`/articles/topic/${slug}`} key={slug}>
                        See all {slug} articles ...
                </Link> 
        </div>
    );
};