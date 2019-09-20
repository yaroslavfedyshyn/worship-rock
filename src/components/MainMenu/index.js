import React from 'react';
import { ROUTE_TO_ROOT } from '../../constants/routes';
import MenuItem from '../MenuItem';

const MainMenu = () => {
  const menuItems = [
    {
      title: 'Home',
      path: ROUTE_TO_ROOT,
    },
    {
      title: 'Albums',
      path: ROUTE_TO_ROOT, // ROUTE_TO_ALBUMS,
    },
    {
      title: 'Events',
      path: ROUTE_TO_ROOT, // ROUTE_TO_EVENTS,
    },
    {
      title: 'News',
      path: ROUTE_TO_ROOT, // ROUTE_TO_NEWS,
    },
    {
      title: 'Contacts',
      path: ROUTE_TO_ROOT, // ROUTE_TO_CONTACTS,
    },
  ];

  return (
    <ul>
      {menuItems.map((item) => MenuItem(item))}
    </ul>
  );
};

export default MainMenu;
