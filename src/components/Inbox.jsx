import React from 'react'
import SearchModal from './SearchModal'
import { auth, db } from './Firebase'
import { child, get, onValue, query, ref } from 'firebase/database'
import SpeedDialModal from './SpeedDialModal'

const Inbox = () => {
//   let greetUser = () => {
//     auth.onAuthStateChanged(cred => {
//         let uid = cred.uid; 
//         let dbRef = ref(db); 
//         get(child(dbRef, `users/${uid}/`))
//             .then(userInfo => {
//                 let userName = userInfo.val().userName; 
//                 let alertElement = document.createElement('div'); 
//                 alertElement.classList.add('alert', 'alert-success', 'absolute', 'top-5', 'font-bold', 'text-center', 'z-40')
//                 alertElement.textContent = `Welcome ${userName}`
//                 //? append to modalWrapper
//                 let modalWrapper = document.querySelector('.contactsCont'); 
//                 modalWrapper.appendChild(alertElement); 
//                 setTimeout(() => {
//                     modalWrapper.removeChild(alertElement)
//                 }, 1500)
//             })
//     })
// }

  let retrieveMessages = () => {
    auth.onAuthStateChanged(cred => {
      let uid = cred.uid; 
      let dbRef = ref(db); 
      get(child(dbRef, `users/${uid}/chats/`))
      .then(chats => {
        console.log(chats.val())
        chats.forEach(chat => {
          console.log(chat.val().firstMsg)
        })
      })
    })
  }

  retrieveMessages(); 
  return (
    <div>
      <div className='contactsCont flex flex-col items-center gap-2'>
        <div className='contact w-[100%] h-[4rem] bg-slate-50 flex flex-col justify-center gap-2 whitespace-nowrap p-2'>
          <p className='userName text-black h-[50%]'>Timothy  </p>
          <div>
            <p className='newest Msg text-slate-600 text-ellipsis overflow-hidden'>whats up dawgy dog dawgydawgydawgydawgydawgy </p>
          </div>
        </div>
      </div>
      {/* <SpeedDialModal/> */}

    </div>
  )
}

export default Inbox