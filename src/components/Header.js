import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import SettingsIcon from "@material-ui/icons/Settings";
import { usePageTitle } from '../hooks/usePageTitle';
import { AuthorizationContext } from '../context/Authentication';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: '-2%', 
    width: "102%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dedede",
    padding: '10px 20px',
    margin: 0, 
    boxShadow: "5px 10px 8px #888888",
  },
  title: {
    flex: 3,
    fontSize: "30px",
  },
  icon: {
    flex: 1,
    fontSize: "32px",
  },
};

export const MobileHeader = props => {
  const [ pageTitle ] = usePageTitle() 
  const AuthState = useContext(AuthorizationContext)

  return (
    <header style={styles.header}>
        <Typography variant="subtitle2" style={styles.title}>
          {pageTitle}
        </Typography>
        <Link to='/account'>
          <SettingsIcon style={styles.icon} />
        </Link>
    </header>
  );
}
