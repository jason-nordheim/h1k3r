import React from 'react'
import { MobileHeader } from '../components/Header'
import { MobileFooter } from '../components/Footer'

export const MobileLayout = props => {
  return (
    <div>
      <MobileHeader>
      </MobileHeader>
      <main style={{marginTop: '80px'}}>
        {props.children}
      </main>
      <MobileFooter>
      </MobileFooter>
    </div>
  )
}

