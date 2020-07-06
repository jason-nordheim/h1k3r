import { useState, useReducer, useEffect } from "react";
import { loginUser, registerUser } from "../API";

const SAVE_KEY = 'loginState'

const startState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  first: null,
  last: null,
  email: null,
  password: null,
  error: null,
};
const actions = {
  signIn: "SIGN_IN",
  signOut: "SIGN_OUT",
  register: "REGISTER",
  authenticated: "AUTHENTICATED",
  accountCreated: "ACCT_CREATED",
  error: "ERROR",
  reset: "RESET",
};

const AuthenticationReducer = (state, action) => {
  const {
    first,
    last,
    username,
    password,
    email,
    bio,
    token,
    error,
  } = JSON.parse(action.payload);
  switch (action.type) {
    case actions.signIn:
      return {
        ...state,
        error: null,
        isLoading: true,
        username,
        password,
      };
    case actions.signOut:
      return startState;
    case actions.register:
      return {
        ...state,
        error: null,
        isLoading: true,
        first,
        last,
        username,
        email,
        password,
        bio,
      };
    case actions.accountCreated:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case action.authenticated:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: null,
        token,
      };
    case actions.error:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error,
      };
    case actions.reset:
      return localStorage.getItem(SAVE_KEY);
    default:
      return state;
  }
};

export const useLoginState = () => {
  const [state, dispatch] = useReducer(AuthenticationReducer, startState);

  useEffect(() => {
    if (state !== startState){
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const signIn = async (username, password) => {
    dispatch({
      type: actions.signIn,
      payload: JSON.stringify({ username, password }),
    });
    try {
      const data = await loginUser(username, password);
      dispatch({
        type: actions.authenticated,
        payload: JSON.stringify({ token: data.token }),
      });
    } catch (err) {
      dispatch({
        type: actions.error,
        payload: JSON.stringify({ error: err }),
      });
    }
  };
  const register = async (first, last, username, password, email, bio) => {
    dispatch({
      type: actions.register,
      payload: JSON.stringify({ first, last, email, password, bio, username }),
    });
    try {
      const data = await registerUser(first, last, username, password, email, bio)
      console.log('register', data)
    } catch (err) {
      dispatch({ type: actions.error, payload: JSON.stringify({error: err})})
    }
  };
  const signOut = () => { 
    localStorage.removeItem(SAVE_KEY)
  };

  return [state, signIn, signOut, register];
};
