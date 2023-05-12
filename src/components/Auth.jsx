import React, { useState } from 'react'

const Auth = () => {
  let [regForm, setRegForm] = useState(false); 
  let [logForm, setLogForm] = useState(false); 

  let handleRegForm = () => {
    let [regUserInput, setRegUserInput] = useState(''); 
    let [regEmailInput, setRegEmailInput] = useState(''); 
    let [regPassInput, setRegPassInput] = useState(''); 
    let [regIntInput, setRegIntInput] = useState(''); 
    let [interests, addInterest] = useState([]); 

    let [logEmailInput, setLogEmailInput] = useState(''); 
    let [logPassInput, setLogPassInput] = useState(''); 

    setRegForm(regForm => !regForm)
  }; 
  let handleLogForm = () => {
    setLogForm(logForm => !logForm)
  }; 

  let handleSetIntInput = (e) => { //? sets the interests input while you're typing
    setRegIntInput(e.target.value)
  }
  let addToIntArray = () => {
    if (interests.length <= 5) {
      if (interests.length === 0) {
        addInterest(regIntInput)
        console.log(interests); 
      } else {
        addInterest(...interests, regIntInput)
        console.log(interests)
      }
    } else if (interests.length > 5) {
      let alertElement = document.createElement('')
    }
  }


  return (
    <div className='h-screen w-full bg-[#7B9E87] flex flex-col items-center justify-around'>
      <h1 className='text-center text-[2.5rem] font-extrabold z-2 text-accent'>Enigma</h1>
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
              <p className='text-black p-2 font-bold text-center'>Meet new people based who share interests with you and form meaningful connections</p>
              <img className='h-[auto] w-[auto] pointer-events-none' src='./undraw-connections.svg' alt='two people making a meaningful connection'/>
            </div>
          </div> 
        </div>
      </div>
      <div className='buttonWrapper flex flex-col gap-5'>

        {/* REGISTER MODAL */}
        <label htmlFor="reg-modal" className="btn btn-accent">Sign Up</label>

          <input type="checkbox" id="reg-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative flex flex-col justify-center gap-4">
              <label htmlFor="reg-modal" className="btn btn-accent btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold text-center text-black">Register</h3>
              <input className='input input-secondary' type='text' placeholder='User Name'/>
              <input className='input input-secondary' type='email' placeholder='Email'/>
              <input className='input input-secondary' type='password' placeholder='Password'/>
              <div className='interestCont flex items-center justify-center'>
                <input className='input w-full input-secondary' type='text' placeholder='Set 5 Interests!' onChange={handleSetIntInput}/>
                <button className='btn btn-square btn-accent'><p className='text-black font-bold'>+</p></button>
              </div>

              <br></br>
              <button className='btn btn-accent'>Register</button>
            </div>
          </div>
        {/* END OF REGISTER MODAL */}
        <button className='btn btn-accent btn-wide'>Log In</button>
        <button className='btn btn-accent btn-wide relative text-white font-bold'><img className='h-[auto] w-[1.5rem] mr-4 absolute left-4' src='./google.png' alt='google icon' /> Use Google</button>

      </div>
    </div>
  )
}

export default Auth