import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import DrawerModal from './DrawerModal'
import Loader from './animations/Loader'

const Landing = () => {
  
  return (
    <div>
      {/* <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
          <label htmlFor="my-drawer" className=" drawer-button">
            <i className="fa-solid fa-bars text-2xl p-2"></i>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
      </div>
    </div> */}
    <DrawerModal/>
  </div>  
  )
}

export default Landing