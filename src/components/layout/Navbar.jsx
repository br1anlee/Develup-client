import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SidebarData, sideBarDataBottom } from './SidebarData';
// import { IconContext } from 'react-icons';
import './navbar.css';

function Navbar({ currentUser }) {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => {
    setsidebar(!sidebar);
  };

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
              <MdIcons.MdOutlineKeyboardReturn style={{ color: 'white' }}/>
            </Link>
          </li>
          <li className="nav-text-nohover">
            <img
              style={{ height: '50px', width: '50px' }}
              src="http://placekitten.com/200/200"
            ></img>

            {currentUser ? <p className='nav-text'>Welcome, {currentUser.name}</p> : <p>Not Logged In</p>}

          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={`navbar-${index}`} style={{backgroundColor:`${item.background}`}} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          {/* {sideBarDataBottom.map((item, index) => {
                return (
                  <li key={`navbar-lower-${index}`} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })} */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

