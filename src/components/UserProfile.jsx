import { useContext} from "react"
import { UserContext } from "./contexts/User"


export default function UserProfile({user}) {

    const {setUser} = useContext(UserContext);

    return (
        <div className="user_card">  
            <div key= {user.username} >
              <b>UserName: {user.username}</b>
               <p>Name: {user.name}</p>
            </div>
            <div>
               <img className= "img" src={user.avatar_url} alt={user.username} />
            </div>
            <div>
                <button onClick={() => setUser(user.username)}>Log in as {user.username}</button>
            </div>            
        </div>
    );
};