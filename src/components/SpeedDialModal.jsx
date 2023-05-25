import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaCommentMedical } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import SpeedDialToggle from './SpeedDialToggle'

const SpeedDialModal = () => {
    let [openBtn, setOpenBtn] = useState(true); 
    let [speedDial, setSpeedDial] = useState(false); 
    let handleSpeedDialState = () => {
      setSpeedDial(speedDial => !speedDial)
    }
  return (
    <div className='fixed bottom-4 right-4 overflow-hidden'>
      <SpeedDialToggle handleSpeedDialState={handleSpeedDialState} speedDial={speedDial}/>
    </div>
  )
}

export default SpeedDialModal