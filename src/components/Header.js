import React from 'react'
import { useLocation } from 'react-router-dom'

const pathMapper = {
  '/account': 'My Account', 
  '/social': 'Social', 
  '/events': 'Events', 
  
}

export const MobileHeader = props => {
  const location = useLocation() 
  return (
    <div>
    </div>
  )
}
