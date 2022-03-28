import { Link } from 'react-router-dom'

export default function Navbar({ handleLogout, currentUser }) {
  // if the user is logged in
  const loggedIn = (
    <>
    <li>
      {/* if the user is loggerd in..... */}
      <Link to="/">
        {/* todo: app function to logout */}
        <span onClick={handleLogout}>log out</span>
      </Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    </>
  )

  // if the user is logged out
  const loggedOut = (
    <>
    <li>
        {/* if the user in logged out..... */}
        <Link to="/signup">register</Link>
    </li>
    <li>
        <Link to="/login">login</Link>
    </li>
    </>
  )

  return (
    <nav>
        <ul>
            <li>
                <Link to="/">DevelUp +</Link>
            </li>
        {currentUser ? loggedIn : loggedOut}
        </ul>

    </nav>
  )
}