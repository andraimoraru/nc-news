import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";

export default function CommentCard({article}) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading]= useState(true); 
    const {article_id} = useParams();
   
    useEffect(()=>{
        setIsLoading(true);
        getCommentsByArticleId(article_id)
        .then((result)=> {
            setComments(result);
        })
        .then(() => {
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <p>Loading...</p>;

    return (

        <div >  
             {comments.map((comment)=> {
                   return (
                <div className="article_view" key={comment.comment_id}> <b>{comment.author}: </b>  {comment.body}</div>
            )
        })}
        </div>
    )
}