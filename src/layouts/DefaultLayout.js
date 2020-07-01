import React from 'react'
import { MobileHeader } from '../components/Header'
import { MobileFooter } from '../components/Footer'

export const MobileLayout = props => {
  return (
    <div>
      <MobileHeader>
      </MobileHeader>
      <main>
        {props.children}
      </main>
      <MobileFooter>
      </MobileFooter>
    </div>
  )
}

