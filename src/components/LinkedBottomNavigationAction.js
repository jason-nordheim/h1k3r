import React from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigationAction, withStyles } from "@material-ui/core/";
import { usePageTitle } from '../hooks/usePageTitle'

export const LinkedBottomNavigationAction = ({ address, label, icon }) => {
  const [pageTitle] = usePageTitle(); 
  return (
    <Link to={address} style={{textDecoration: 'none'}}>
      <StyledBottomNavigationAction
        selected={ pageTitle === label ? true: false}
        label={label}
        icon={icon}
      />
    </Link>
  );
}

const StyledBottomNavigationAction = withStyles({
  root: {
    minWidth: '73px',
    color: 'black', 
  }, 
  label: {
    color: 'black'
  }
})(BottomNavigationAction)
