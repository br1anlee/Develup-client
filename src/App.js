import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'
import Category from './components/pages/Category'
import Error from './components/pages/Error'
import Navbar from './components/layout/Navbar';

function App() {
  // state with the user data when the user is logged in  
  // useState is null because there is no logged in user yet.
const [currentUser, setCurrentUser] = useState(null)


  // useEffect that handles localstraoge if the user navigates away from the page or refreshes
useEffect(() => {
  const token = localStorage.getItem('jwt_token')
  // if a token is found -> Log the user in OTHERWISE make sure they are logged out
if (token) {
  setCurrentUser(jwt_decode(token))
} else {
  setCurrentUser(null)
}
}, [])

//Logout handler function that deletes a token from the localstorage
const handleLogout = () => {
  // remove the token from the localstorage
  if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
  // set the userState to be null so that user is logged out
  setCurrentUser(null)
}
  return (
    <Router>
      <div>
        <Navbar currentUser={currentUser}/>
        <Routes>
          {/* PATH to landing page (Landing page will be the login page) */}
          <Route 
            path="/"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />

          {/* Path TO REGISTER */}
          <Route 
            path='/signup'
            element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />

          {/* Path TO CATEGORIES */}
          <Route 
            path='/category'
            element={<Category />}
          />

          <Route 
            path='/category/:id'
            element={<Category />}
          />

          {/* Path TO USER'S PROFILE */}
          <Route 
            path="/profile"
            element={currentUser ? <Profile currentUser={currentUser} /> : <Navigate to="/" />}
          />

          <Route 
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
