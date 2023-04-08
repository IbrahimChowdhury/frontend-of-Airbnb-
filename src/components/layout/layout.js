import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
function layout() {
  return (
    <div>

        <Header/>

        <Outlet/>
    </div>
  )
}

export default layout