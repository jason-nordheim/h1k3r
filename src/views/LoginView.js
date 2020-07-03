import React from 'react'
import { MobileLayout } from '../layouts/DefaultLayout'
import { SignInForm } from '../components/SignInForm'

export const MobileLoginView = props => {
  return (
    <MobileLayout>
      <SignInForm /> 
    </MobileLayout>
  )
}