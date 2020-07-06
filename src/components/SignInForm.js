import React, { useState } from "react";
import { ValidatedTextField } from "./FormElements";
import { Button } from "@material-ui/core";
import { AuthenticationContext } from "./AuthenticationContext";

export const SignInForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "5vw",
    },
  };

  return (
    <AuthenticationContext.Consumer>
      {(value) => {
        const { state, signIn, /* signOut, register */ } = value;

        const handleSubmit = async (event) => {
          event.preventDefault();
          await signIn(username, password)
        };

        return (
          <form style={styles.form}>
            <ValidatedTextField
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
            {state.isLoading ? (
              <Button variant="contained" disabled />
            ) : (
              <Button
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
