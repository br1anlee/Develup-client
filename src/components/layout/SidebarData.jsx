import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    background: '#009099'
  },
  {
    title: 'Browse all decks',
    path: '/category',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    background: '#6A82A6'
  },
  {
    title: 'Create a deck',
    path: 'category/create-deck',
    icon: <IoIcons.IoIosCreate />,
    cName: 'nav-text',
    background: '#5478AD'
  },
  {
    title: 'About',
    path: '/about',
    icon: <BsIcons.BsInfoSquare />,
    cName: 'nav-text',
    background: '#4B5869'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text',
    background: '#4B5869'
  },
];

export const sideBarDataBottom = [
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsInfoSquare />,
        cName: 'nav-text',
      },
      {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout />,
    
        cName: 'nav-text',
      },
];
