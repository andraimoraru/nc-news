import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="links">
                    <Link to="/">Home</Link>
                </div>
                <div className="links">
                    <Link to="/users">Users</Link>
                </div>
                <div className="links">
                    <Link to="/user">User Profile</Link>
                </div>
            </nav>
        </div>
    )
}