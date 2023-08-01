import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation'

export default function Dashboard({ id}) {
  return (
    <div className='d-flex' style={{height: '100vh'}}>
  <Sidebar id={id} />
  <OpenConversation />
    </div>
  )
}
