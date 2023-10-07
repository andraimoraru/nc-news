import { useContext, useEffect, useState } from "react"
import { getCommentsByArticleId, postComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";


export default function CommentAdder ({article}) {
    const {article_id}= useParams();
    const {user} = useContext(UserContext);

    const [newComment, setNewComment] = useState("");
    const [comments, setComments]= useState([]);
    const [buttonStatus, setButtonStatus] = useState('Add your comment');

    useEffect(()=> {
        getCommentsByArticleId(article_id)
        .then((commentsFromApi)=> {
            setComments(commentsFromApi);
        });
    }, []);

    const updateComments = () => {
        setComments((currentComments)=>{
            return [newComment, ... currentComments];
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment && user !== 'guest') {
          postComment(article_id, user, newComment)
          .then(() => {
            updateComments();
            setButtonStatus('Comment added');
           });
          setNewComment('');  
        }
        else {
           if (user === 'guest') alert("Please log in");
           if (!newComment) alert("Please add a comment.");
           setButtonStatus('Add your comment');
        }
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
            <button className="vote_button"> {buttonStatus} </button>      
            </div>
        </form>
    );
};