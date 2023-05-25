import React from 'react'
import { FaCog, FaPlus, FaRegEdit, FaStar, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SpeedDialToggle = ({handleSpeedDialState, speedDial}) => {
  return (
      <div>
        {speedDial? <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: .3}} className='flex flex-col justify-center items-start gap-6 p-4'>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .3}} className='text-1xl'><FaRegEdit/></motion.i>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .2}} className='text-1xl'><FaStar/></motion.i>
            <motion.i initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .1}} className='text-1xl'><FaCog/></motion.i>
        </motion.div> : <motion.div initial={{opacity: 1}} animate={{opacity: 0}} transition={{type: 'tween', duration: .6}} className='flex flex-col justify-center items-center gap-6 p-4'>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .3}} className='text-1xl'><FaRegEdit/></motion.i>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .2}} className='text-1xl'><FaStar/></motion.i>
            <motion.i animate={{y: 10, opacity: 0}} initial={{y: 0, opacity: 1}} transition={{type: 'tween', duration: .3, delay: .1}} className='text-1xl'><FaCog/></motion.i>
        </motion.div>}
        <label className="btn btn-circle btn-primary swap swap-rotate">
        
            <input type="checkbox" />
            
            {/* <!-- hamburger icon --> */}
            <i htmlFor='speedDial' className='swap-off text-1xl' onClick={handleSpeedDialState}><FaPlus/></i>
            
            {/* <!-- close icon --> */}
            <i htmlFor='speedDial' className='swap-on text-1xl' onClick={handleSpeedDialState}><FaTimes/></i>
        
        </label>
    </div>
  )
}

export default SpeedDialToggle