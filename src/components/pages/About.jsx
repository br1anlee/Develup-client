import {Link} from 'react-router-dom'
export default function About () {
    return (
        <>
            <h1>Hello This is the About page</h1>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link>

        </>
    )
}