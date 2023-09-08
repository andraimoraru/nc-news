import { useEffect, useState } from "react";
import { decreaseVotesByArticleId, getArticleById, increaseVotesByArticleId } from "../utils/api"
import { useParams } from "react-router-dom";


export default function VoteCard({article}) {

    const [defaultVotes, setDefaultVotes] = useState(0);
    const {article_id} = useParams();
   
    useEffect(() => {
        getArticleById(article_id)
        .then((articleFromApi) => {
            setDefaultVotes(articleFromApi.votes);
        });
    }, []);


    const IncreaseVotes = (article_id) => {
        increaseVotesByArticleId(article_id);
        const updatedIncreasedVotes = defaultVotes + 1;
        setDefaultVotes(updatedIncreasedVotes);
    }

    const DecreaseVotes =(article_id) => {
        decreaseVotesByArticleId(article_id);
        const updatedDecreasedVotes = defaultVotes -1;
        setDefaultVotes(updatedDecreasedVotes);

    }

    return ( 
    <div className="votes_view">
        <div> 
            <button className="vote_button" onClick={() => {
                IncreaseVotes(article_id);
            }}>               + 1 
            </button>
              Votes  {defaultVotes} 
             <button className="vote_button" onClick={()=> {
                DecreaseVotes(article_id);
             }}>                - 1 
            </button>
        </div>
    </div>
    );
};