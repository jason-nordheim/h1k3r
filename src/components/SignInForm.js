import React, { useState, useContext } from "react";
import { ValidatedTextField } from "./FormElements";
import { AuthorizationContext, SignIn } from "../context/Authentication";
import { Button } from "@material-ui/core";

export const SignInForm = (props) => {
  const AuthContext = useContext(AuthorizationContext);
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
      {AuthContext.isLoading ? (
        <Button variant="contained" disabled />
      ) : (
        <Button
          variant="contained"
          disabled={username === "" || password === ""}
          onClick={(e) => AuthContext.dispatch(SignIn(username, password))}
        >
          Login
        </Button>
      )}
    </form>
  );
};
