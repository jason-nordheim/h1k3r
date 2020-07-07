import React from 'react'
import { MobileLayout } from "../components/layout/DefaultLayout";
import { RegisterUserForm } from '../components/RegisterUserForm'

export const MobileRegisterView = props => {
  return (
    <MobileLayout>
      <RegisterUserForm /> 
    </MobileLayout>
  )
}
