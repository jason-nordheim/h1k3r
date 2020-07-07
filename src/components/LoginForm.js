import React, { useState } from "react";
import { ValidatedTextField } from "./FormElements";
import { Button, Typography } from "@material-ui/core";
import { AuthenticationContext } from "./AuthenticationContext";
import { HikerImage } from './HikerImage'
import { Redirect } from 'react-router-dom';

export const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      alignContent: 'center',
    },
    input: {
      width: '80%', 
      alignSelf: 'center'
    }, 
    image: {
      padding: '5vw', 
      height: '50vw', 
    }, 
    button: {
      alignSelf: 'center', 
      width: '80%'
    }, 
    error: {
      width: '80%', 
      color: 'red', 
      alignSelf: 'center',
    }
  };

  return (
    <AuthenticationContext.Consumer>
      {(value) => {
        const { state, signIn, /* signOut, register */ } = value;

        const handleSubmit = async (event) => {
          event.preventDefault();
          await signIn(username, password)
        };

        if (state.isLoggedIn) return <Redirect to="/" /> 

        return (
          <form style={styles.form}>
            <HikerImage style={styles.image} /> 
            { state.error ? <Typography style={styles.error}> Incorrect username or passoword</Typography> : null }
            <ValidatedTextField
              style={styles.input}
              fieldName="username"
              fieldLabel="Username"
              validationFunction={(username) => {
                if (username.length < 3)
                  return "Username must be greater than 3 characters";
                else {
                  setUsername(username);
                  return "";
                }
              }}
            />
            <br />
            <ValidatedTextField
              fieldName="password"
              fieldLabel="Password"
              type="password"
              style={styles.input}
              validationFunction={(password) => {
                if (password.length < 3)
                  return "Password must be greater than 3 characters";
                else {
                  setPassword(password);
                  return "";
                }
              }}
            />
            <br />
            <br /> 
            {state.isLoading ? (
              <Button style={styles.button} variant="contained" disabled >Loading...</Button>
            ) : (
              <Button
                style={styles.button}
                variant="contained"
                disabled={username === "" || password === ""}
                onClick={handleSubmit}
              >
                Login
              </Button>
            )}
          </form>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
