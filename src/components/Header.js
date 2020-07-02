import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavigationLinks } from '../global'
import { Typography } from '@material-ui/core'
import SettingsIcon from "@material-ui/icons/Settings";


const styles = {
  header: {
    position: 'absolute', 
    top: 0, 
    width: '100%',
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: '5px 10px'
  }, 
  title: {
    flex: 3
  }, 
  icon: {
    flex: 1 
  }
}

export const MobileHeader = props => {
  const [pageTitle, setPageTitle] = useState('Home')
  const location = useLocation() 
  
  useEffect(() => {
    NavigationLinks.forEach(navLink => {
      if(navLink.address === location.pathname) {
        setPageTitle(navLink.label)
      }
    })
  },[location])

  return (
    <header style={styles.header}>
        <Typography variant="h3"
                  style={styles.title}
        >
          {pageTitle}
        </Typography>
        <SettingsIcon style={styles.icon} />
    </header>
  );
}
