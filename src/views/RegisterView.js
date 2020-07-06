import React from 'react'
import { MobileLayout } from '../layouts/DefaultLayout'
import { RegisterUserForm } from '../components/RegisterUserForm'

export const MobileRegisterView = props => {
  return (
    <MobileLayout>
      <RegisterUserForm /> 
    </MobileLayout>
  )
}
