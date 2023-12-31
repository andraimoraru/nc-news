import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import CommentCard from "./CommentCard";
import VoteCard from "./VoteCard"
import CommentAdder from "./CommentAdder";
import ArticleBody from "./ArticleBody";

export default function SingleArticle() {

    const [singleArticle, setSingleArticle]= useState({});
    const [isLoading, setIsLoading]= useState(true);  
    const {article_id} = useParams();
  
    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
        .then((result)=> {
            setSingleArticle(result);

        })
        .then(()=> {
            setIsLoading(false);
        })
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
        <ArticleCard 
        key={singleArticle.article_id} 
        article={singleArticle}       
        />
        <ArticleBody
        key={singleArticle.body} 
        article={singleArticle}  
        />
        <VoteCard
        article = {singleArticle}
        />
        <div>   
        <CommentAdder 
        article = {singleArticle}
        /></div>
        <CommentCard
        article={singleArticle}   
        />
        </>
    );
};