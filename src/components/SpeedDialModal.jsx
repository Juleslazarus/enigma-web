import React, { useState } from 'react'
import { FaInbox, FaPlus } from 'react-icons/fa'
import { FaCommentMedical } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SpeedDialModal = ({speedDialInboxOn, speedDialFavoritesOn, speedDialSettingsOn}) => {
    let [openBtn, setOpenBtn] = useState(true); 
    let [speedDial, setSpeedDial] = useState(false); 
    let handleSpeedDialState = () => {
      setSpeedDial(speedDial => !speedDial)
    }
  return (
    <div className='fixed bottom-4 right-4 overflow-hidden'>
      {/* <SpeedDialToggle handleSpeedDialState={handleSpeedDialState} speedDial={speedDial}/> */}
      <div className='overflow-hidden flex flex-col justify-center items-center'>
        {speedDial? <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: .3}} className='flex flex-col justify-center items-start gap-6 p-4'>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .4}} className='text-2xl'><FaRegEdit/></motion.i>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .3}} onClick={speedDialInboxOn} className='text-2xl'><FaInbox/></motion.i>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .2}} onClick={speedDialFavoritesOn} className='text-2xl'><FaStar/></motion.i>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .1}} onClick={speedDialSettingsOn} className='text-2xl'><FaCog/></motion.i>
        </motion.div> : <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{type: 'tween', duration: .6}} className='flex flex-col justify-center items-center gap-6 p-4'>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .4}} className='text-2xl'><FaRegEdit/></motion.i>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .3}} className='text-2xl'><FaInbox/></motion.i>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .2}} className='text-2xl'><FaStar/></motion.i>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .1, delay: .1}} className='text-2xl'><FaCog/></motion.i>
        </motion.div>}
        <label className="btn btn-circle btn-primary swap swap-rotate">
        
            <input type="checkbox" />
            
            {/* <!-- hamburger icon --> */}
            <i htmlFor='speedDial' className='swap-off text-2xl' onClick={handleSpeedDialState}><FaPlus/></i>
            
            {/* <!-- close icon --> */}
            <i htmlFor='speedDial' id='closeSpeedDial' className=' swap-on text-2xl' onClick={handleSpeedDialState}><FaTimes/></i>
        
        </label>
    </div>
    </div>
  )
}

export default SpeedDialModal