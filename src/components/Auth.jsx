import React, { useState } from 'react'
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal'

const Auth = () => {
  let [regForm, setRegForm] = useState(false); 
  let [logForm, setLogForm] = useState(false); 

  
    


  return (
    <div className='initialWrapper h-screen w-full bg-[#454E9E] flex flex-col items-center justify-around mb-20 overflow-y-scroll'>
      <h1 className='text-center text-[2.5rem] font-extrabold z-2 text-white'>Enigma</h1>
      <div className='flex flex-col items-center w-full  '>
        {/* <p className='text-center text-white font-bold text-[1.5rem] z-10 p-2'>A safe place to chat with existing friends & make new ones!</p> */}
        {/* <div className='hero flex just-between gap-[5rem]'>
          <img className='h-[auto] w-[55%] ' src='./undraw-chat-one.svg' alt='a person chatting online'/>
          <img src='./undraw-chat-two.svg' className='h-[auto] w-[55%]' alt='second person chatting online'/>
        </div> */}
      </div>
      <div className='carouselWrapper w-full flex justify-center'>
        <div className="w-64 carousel carousel-center rounded-box bg-transparent flex gap-2 shadow-lg">
          <div className="carousel-item w-full drop-shadow-xl">
            <div className='h-[55vh] w-[100%]  border-2 border-black bg-white text-black rounded-2xl flex flex-col justify-center items-center gap-10'>
              <p className='text-black p-2 font-bold text-center text-'>Safe and secure messaging with all your closest contacts</p>
              <img className='h-[auto] w-[80%] pointer-events-none' src='./undraw-chat-two.svg' alt='person two chatting online'/>
              <img className='h-[auto] w-[80%] pointer-events-none' src='./undraw-chat-one.svg' alt='person one chatting online'/>
            </div>
          </div> 
          <div className="carousel-item w-full drop-shadow-xl">
            <div className='h-[55vh] w-[100%] bg-white border-2 border-black text-black rounded-2xl flex flex-col justify-around'>
              <p className='text-black p-2 font-bold text-center'>Chat with anyone, anywhere. All your messages accessible in all your devices</p>
              <img className='h-[auto] w-[auto] pointer-events-none' src='./undraw-platforms.svg' alt='two people chatting using different devices'/>
            </div>
          </div> 
          <div className="carousel-item w-full drop-shadow-xl">
            <div className='h-[55vh] w-[100%] bg-white border-2 border-black text-black rounded-2xl flex flex-col justify-around'>
              <p className='text-black p-2 font-bold text-center'>Un-send your messages or any unwanted messages received. Use reactions to convey your feelings! </p>
              <img className='h-[auto] w-[auto] pointer-events-none' src='./undraw-features.svg' alt='chat app features'/>
            </div>
          </div> 
          <div className="carousel-item w-full drop-shadow-xl">
            <div className='h-[55vh] w-[100%] bg-white border-2 border-black text-black rounded-2xl flex flex-col justify-around'>
              <p className='text-black p-2 font-bold text-center'>Meet new people who share interests with you and form meaningful connections</p>
              <img className='h-[auto] w-[auto] pointer-events-none' src='./undraw-connections.svg' alt='two people making a meaningful connection'/>
            </div>
          </div> 
        </div>
      </div>
      <div className='buttonWrapper flex flex-col gap-5 '>
          <RegisterModal/>
          <LoginModal/>
      </div>
    </div>
  )
}

export default Auth