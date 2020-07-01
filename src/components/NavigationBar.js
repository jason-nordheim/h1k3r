import React from 'react'
import { BottomNavigation } from '@material-ui/core/'
import { LinkedBottomNavigationAction } from './LinkedBottomNavigationAction';
import { NavigationLinks } from '../global'

export const MobileNavigationBar = props => {
  return (
    <nav>
      <BottomNavigation style={{position: 'absolute', bottom: '0px', margin: 0, padding: 0, marginLeft: '-1vw'}}>
        { NavigationLinks.map(link => <LinkedBottomNavigationAction key={link.label} {...link} /> ) }
      </BottomNavigation>
    </nav>
  );
}
