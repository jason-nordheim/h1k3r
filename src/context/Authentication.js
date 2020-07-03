import { createContext } from 'react'

export const AuthActions = {
  signIn: "SIGN_IN", 
  signUp: "SIGN_UP", 
  accontCreated: "ACCT_CREATED",
  signedIn: "SIGNED_IN", 
  signOut: 'SIGN_OUT', 
  error: 'ERROR', 
  reset: 'RESET'
}

// actions 
export const SignIn = (username, password) => {
  return {
    type: AuthActions.signIn, 
    payload: { username, password }
  }
}
export const SignUp = (first, last, email, bio, username, password) => {
  return {
    type: AuthActions.signUp, 
    payload: { first, last, email, bio, username, password }
  }
}
export const AccountCreated = () => {
  return {
    type: AuthActions.accontCreated, 
  }
}
export const SignedIn = (token) => {
  return {
    type: AuthActions.signedIn, 
    payload: { token } 
  }
}
export const SignOut = () => {
  return {
    type: AuthActions.signOut 
  }
}
export const Error = (error) => {
  return {
    type: AuthActions.error, 
    payload: { error }
  }
}
export const Reset = (data) => {
  return {
    type: AuthActions.reset, 
    payload: data 
  }
}

// reducer 
const startState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  first: null,
  last: null,
  email: null,
  password: null,
  error: null 
};
export const AuthenticationReducer = (state = startState, action) => {
  const { first, last, email, bio, username, password, error, token } = action.payload;
  switch(action.type){
    case AuthActions.reset: 
      return action.payload ? action.payload : state 
    case AuthActions.signIn: 
      return {
        ...state, 
        isLoading: true, 
        username, 
        password
      }
    case AuthActions.signUp: 
      return {
        ...state, 
        isLoading: true, 
        first, 
        last, 
        email, 
        bio, 
        username, 
        password
      }
    case AuthActions.accontCreated: 
      return {
        ...state, 
        isLoading: false, 
        password: null 
      }
    case AuthActions.signedIn:
      return {
        ...state, 
        isLoading: false, 
        isLoggedIn: true, 
        password: null, 
        token 
      }
    case AuthActions.signOut: 
      return {
        ...state, 
        isLoading: false,
        token: null, 
      }
    case AuthActions.error: 
      return {
        ...state, 
        isLoading: false, 
        error 
      }
    default: 
      return state 
  }
}


export const AuthorizationContext = createContext()