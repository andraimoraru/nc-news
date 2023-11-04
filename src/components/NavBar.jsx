
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function Navbar() {
  const {user} = useContext(UserContext);
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Andra's News
      </Link>
      <div className="welcome"> Welcome, {user}!</div>
      <ul>
        <CustomLink to="/articles">Articles</CustomLink>
        <CustomLink to="/topics">Topics</CustomLink>
        <CustomLink to="/users">Users</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}