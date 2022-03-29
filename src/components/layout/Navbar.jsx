import React from 'react';
// import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons';
import './navbar.css';

function Navbar({ currentUser, handleLogout }) {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => {
    setsidebar(!sidebar);
  };

  const loggedIn = (
    <>
      <li
        key={'navbar-last'}
        style={{ backgroundColor: '#4B5869' }}
        className={'nav-text'}
      >
        <Link to="/">
          <AiIcons.AiOutlineLogout />
          <span onClick={handleLogout}>Logout</span>
        </Link>
      </li>
    </>
  );

  // if the user is logged out
  const loggedOut = (
    <>
      <li
        key={'navbar-last'}
        style={{ backgroundColor: '#4B5869' }}
        className={'nav-text'}
      >
        <Link to="/">
          <AiIcons.AiOutlineLogout />
          <span>Login</span>
        </Link>
      </li>
      <li
        key={'navbar-lasting'}
        style={{ backgroundColor: '#4B5869' }}
        className={'nav-text'}
        >
      <Link to="/signup">
      <IoIcons.IoIosArrowUp />
          <span>Sign Up</span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars style={{ color: 'white' }} onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <MdIcons.MdOutlineKeyboardReturn style={{ color: 'white' }} />
            </Link>
          </li>
          <li className="nav-text-nohover">
            <img
              alt="user"
              style={{ height: '40px', width: '40px' }}
              src="./logo.png"
            ></img>

            {currentUser ? (
              <p className="nav-text">Welcome, {currentUser.name}</p>
            ) : (
              <p>Not Logged In</p>
            )}
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={`navbar-${index}`}
                style={{ backgroundColor: `${item.background}` }}
                className={item.cName}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          {currentUser ? loggedIn : loggedOut}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
