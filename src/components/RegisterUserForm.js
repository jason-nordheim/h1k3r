import React, { useState } from "react";
import { ValidatedTextField } from "./FormElements";
import { Button } from "@material-ui/core";
import { useLoginState } from "../hooks/useLoginStatus";
import { stringContains } from '../helpers'

export const RegisterUserForm = (props) => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, signIn, signOut, register] = useLoginState()

  const invalidCharacters = "!@#$%^&*()".split('')

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "5vw",
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //await signIn(username, password)
    await register(first, last, email, password, bio, username)
  };

  return (
    <form style={styles.form}>
      <ValidatedTextField
        fieldName="first"
        fieldLabel="First Name"
        validationFunction={(firstName) => {
          if (firstName.length < 2)
            return "First name must be greater than 2 characters";
          else if (firstName.length > 25)
            return "First name cannot exceed 25 characters";
          else if (stringContains(firstName, invalidCharacters))
            return `First name cannot contain the following characters: ${invalidCharacters}`;
          else {
            setFirst(firstName);
            return "";
          }
        }}
      />
      <br />
      <ValidatedTextField
        fieldName="last"
        fieldLabel="Last Name"
        validationFunction={(lastName) => {
          if (lastName.length < 2)
            return "Last name must be greater than 2 characters";
          else if (lastName.length > 50)
            return "Last name cannot exceed 50 characters";
          else if (stringContains(lastName, invalidCharacters))
            return `Last name cannot contain the following characters: ${invalidCharacters}`;
          else {
            setLast(lastName);
            return "";
          }
        }}
      />
      <br />
      <ValidatedTextField
        fieldName="bio"
        fieldLabel="Bio (optional)"
        multiline={true}
        validationFunction={(bio) => {
          setBio(bio);
          return "";
        }}
      />
      <br />
      <ValidatedTextField
        fieldName="email"
        fieldLabel="Email"
        type="email"
        validationFunction={(email) => {
          if (email.length < 2)
            return "First name must be greater than 2 characters";
          else if (!stringContains(email, ["@"])) return `Invalid Email format`;
          else {
            setEmail(email);
            return "";
          }
        }}
      />
      <br />
      <ValidatedTextField
        fieldName="username"
        fieldLabel="Username"
        validationFunction={(username) => {
          if (username.length < 3)
            return "Username must be greater than 3 characters";
          else if (username.length > 50)
            return "Username must be less than 50 characters";
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
};
