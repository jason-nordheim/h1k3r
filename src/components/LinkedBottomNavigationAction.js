import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BottomNavigationAction } from "@material-ui/core/";



export const LinkedBottomNavigationAction = ({ address, label, icon }) => {
  const location = useLocation() 
  return (
    <Link to={address} >
      <BottomNavigationAction label={label} icon={icon} />
    </Link>
  );
}
