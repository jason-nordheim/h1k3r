import React from 'react'
import { MobileLayout } from '../layouts/DefaultLayout'
import { LoginForm } from '../components/LoginForm'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const MobileLoginView = props => {
  return (
    <MobileLayout>
      <LoginForm />
      <br />
      <div style={{ textAlign: "center"}}>
        <Link to="/register" style={{ color: '#111', flex: 1}}>
          <Typography variant="subtitle1">Don't have an account?</Typography>
        </Link>
      </div>
    </MobileLayout>
  );
}