import React from 'react'
import { MobileLayout } from "../components/layout/DefaultLayout";
import { Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../components/AuthenticationContext'
import { HikerImage } from '../components/HikerImage';

export const MobileHomeView = props => {
  return (
    <MobileLayout>
      <AuthenticationContext.Consumer>
        {(value) => {
          const { state } = value 
          return state.isLoggedIn 
          ? (
            <div style={{padding: '5vw'}}>
              <Typography>Welcome {state.username}!</Typography>
              <br /> 
            </div>
          )
          : (
            <div style={{ textAlign: "center"}}>
              <Typography variant="subtitle1">Welcome to H1k3r!</Typography>
              <br />
              <br />
              <HikerImage style={{ width: '70vw'}}/> 
              <br />
              <br />
              <Typography variant="subtitle2">
                Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to get
                started
              </Typography>
            </div>
          );
        }}
      </AuthenticationContext.Consumer>
    </MobileLayout>
  )
}

