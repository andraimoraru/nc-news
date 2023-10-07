import { useContext} from "react"
import { UserContext } from "../contexts/User"


export default function UserProfile({user}) {

    const {setUser} = useContext(UserContext);

    return (
        <div className="user_card">  
            <div>
               <img className= "img" src={user.avatar_url} alt={user.username} />
            </div>
            <div key= {user.username} >
              <b>{user.username}</b>
              <p> Name: {user.name}</p>
              <button className= "button_log" onClick={() => setUser(user.username)}>Log in as {user.username}</button>
            </div>         
        </div>
    );
};