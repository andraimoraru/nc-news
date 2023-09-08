import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";
import UserProfile from "./UserProfile";


export default function UsersList() {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
 

    useEffect(() => {
        setIsLoading(true);
        getUsers()
        .then((users)=>{
            setUsersList(users);
            setIsLoading(false);
        });
    },[]);

    if (isLoading) return <p>Loading ...</p>;

    return (
        <>
        {usersList.map((user) => {
            return (
                 <UserProfile key={user.username}
                 user={user}
                  />)
        })}
    </>
    );
};