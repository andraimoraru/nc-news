import { useContext } from "react";
import { UserContext } from "./contexts/User";

export default function Header() {

    const {user} = useContext(UserContext);

    return (
        <div className="header">
            <h2>NC NEWS</h2>
            <h3> Welcome, {user}!</h3>
        </div>
    );
};