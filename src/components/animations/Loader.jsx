import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div initial={{opacity: 0, }} animate={{opacity: 1}} transition={{type: 'tween'}} className='h-screen w-full flex flex-col justify-center items-center z-[20] bg-base-300'>
        <h1 className='font-bold text-2xl text-primary '>Enigma</h1>
        <button className="btn loading btn-ghost"></button>
    </motion.div>
  )
}

export default Loader