import { Link } from "react-router-dom"
export default function About({ handleLogout }) {
  return (
    <>
      <h1>It's time to DevelUp!</h1>
      <h4> </h4>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/">
        <span onClick={handleLogout}>log out</span>
      </Link>
    </>
  )
}
