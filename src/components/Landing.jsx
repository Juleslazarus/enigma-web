import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import DrawerModal from './DrawerModal'
import Loader from './animations/Loader'
import { auth, db } from './Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, set } from 'firebase/database'
  
const Landing = () => {
  
  
  return (
  <div>
    <DrawerModal/>
  </div>  
  )
}

export default Landing