import React from 'react'
import { BottomNavigation } from '@material-ui/core/'
import { LinkedBottomNavigationAction } from './LinkedBottomNavigationAction';
import { NavigationLinks } from '../../global'


export const MobileNavigationBar = props => {
  return (
    <nav
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 3, 
      }}
    >
      <BottomNavigation
        style={{ backgroundColor: "#dedede", paddingTop: "5px" }}
      >
        {NavigationLinks.map((link) => (
          <LinkedBottomNavigationAction key={link.label} {...link} />
        ))}
      </BottomNavigation>
    </nav>
  );
}
