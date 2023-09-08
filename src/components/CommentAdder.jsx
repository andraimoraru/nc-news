import { useContext, useEffect, useState } from "react"
import { getCommentsByArticleId, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "./contexts/User";

export default function CommentAdder ({article}) {
    const {article_id}= useParams();
    const {user} = useContext(UserContext);

    const [newComment, setNewComment] = useState("");
    const [comments, setComments]= useState([]);

    useEffect(()=> {
        getCommentsByArticleId(article_id)
        .then((commentsFromApi)=> {
            setComments(commentsFromApi);
        });
    }, []);

    const updateComments = () => {
        getCommentsByArticleId(article_id)
        .then((commentsFromApi)=> {
            setComments(commentsFromApi);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment(article_id, user, newComment)
        .then(() => {
            updateComments();
        });
        setNewComment('');       
    }

    return (
        <form className="comment-add" onSubmit={handleSubmit}>
            <div><label htmlFor="newComment"><b> Add a comment  </b></label></div>
            <div>
               <textarea className="comment_input"
               id="newComment" 
               value={newComment}
               onChange={(e)=> {
               setNewComment(e.target.value)}}               
            ></textarea>
            </div>
            <div>         
            <button className="vote_button"> Add </button>      
            </div>
        </form>
    );
};