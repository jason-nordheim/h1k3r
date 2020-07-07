import React from "react";
import { Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { usePageTitle } from "../../hooks/usePageTitle";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../AuthenticationContext";

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: "-2%",
    width: "92%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dedede",
    padding: "10px 20px",
    margin: 0,
    boxShadow: "5px 10px 8px #888888",
    zIndex: 2, 
  },
  title: {
    flex: 4,
    fontSize: "30px",
  },
  iconLink: {
    color: '#000',
    paddingLeft: '10px', 
  },
  icon: {
    flex: 1,
    fontSize: "32px",
  },
};

export const MobileHeader = (props) => {
  const [pageTitle] = usePageTitle();

  return (
    <AuthenticationContext.Consumer>
      {(value) => {
        const { state, signIn, signOut, register} = value;
        return (
          <header style={styles.header}>
            <Typography variant="subtitle2" style={styles.title}>
              {pageTitle}
            </Typography>
            {state.isLoggedIn ? (
              <>
                <Link to="/account" style={styles.iconLink}>
                  <SettingsIcon style={styles.icon} />
                </Link>
                <Link to="/" style={styles.iconLink} onClick={(e) => signOut()}>
                  <ExitToAppIcon style={styles.icon} />
                </Link>
              </>
            ) : null}
          </header>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
