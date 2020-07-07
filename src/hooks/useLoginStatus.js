import { useReducer, useEffect } from "react";
import { loginUser, registerUser } from "../API";

const SAVE_KEY = "loginState";

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
  const payload = JSON.parse(action.payload) 
  switch (action.type) {
    case actions.signIn:
      return {
        ...state,
        error: null,
        isLoading: true,
        username: payload.username,
        password: payload.password
      };
    case actions.signOut:
      return startState;
    case actions.register:
      return {
        ...state,
        error: null,
        isLoading: true,
        first: payload.first,
        last: payload.last,
        username: payload.username,
        email: payload.email, 
        password: payload.password,
        bio: payload.bio,
      };
    case actions.accountCreated:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case actions.authenticated:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        error: null,
        token: payload.token,
      };
    case actions.error:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: payload.error 
      };
    case actions.reset:
      const data = localStorage.getItem(SAVE_KEY);
      const newState = JSON.parse(data);
      return newState
    default:
      return state;
  }
};

export const useLoginState = () => {
  const [state, dispatch] = useReducer(AuthenticationReducer, (JSON.parse(localStorage.getItem(SAVE_KEY))) || startState);


  useEffect(() => {
     if (state !== startState) {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const signIn = async (username, password) => {
    await dispatch({
      type: actions.signIn,
      payload: JSON.stringify({ username, password }),
    });
    try {
      const data = await loginUser(username, password);
      await dispatch({
        type: actions.authenticated,
        payload: JSON.stringify({ token: data.token }),
      });
      return data 
    } catch (err) {
      await dispatch({
        type: actions.error,
        payload: JSON.stringify({ error: "Incorrect Username or Password" }),
      });
    }
  };
  const register = async (first, last, username, password, email, bio) => {
    await dispatch({
      type: actions.register,
      payload: JSON.stringify({ first, last, email, password, bio, username }),
    });
    try {
      const data = await registerUser(
        first,
        last,
        username,
        password,
        email,
        bio
      );
      await dispatch({ type: actions.accountCreated, payload: null });
      return data 
    } catch (err) {
      await dispatch({
        type: actions.error,
        payload: JSON.stringify({ error: err }),
      });
    }
  };
  const signOut = () => {
    localStorage.removeItem(SAVE_KEY);
  };
  const restore = async () => {
    await dispatch({ type: actions.reset } )
  }

  return [state, signIn, signOut, register, restore ];
};
