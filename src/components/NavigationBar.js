import React from 'react'
import { BottomNavigation } from '@material-ui/core/'
import { LinkedBottomNavigationAction } from './LinkedBottomNavigationAction';
import { links } from '../global'

export const MobileNavigationBar = props => {
  return (
    <nav>
      <BottomNavigation>
        { links.map(link => <LinkedBottomNavigationAction key={link.label} {...link} /> ) }
      </BottomNavigation>
    </nav>
  );
}
