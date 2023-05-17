import React from 'react'
import SearchModal from './SearchModal'
import { auth, db } from './Firebase'
import { child, get, ref } from 'firebase/database'

const Inbox = () => {
  let greetUser = () => {
    auth.onAuthStateChanged(cred => {
        let uid = cred.uid; 
        let dbRef = ref(db); 
        get(child(dbRef, `users/${uid}/`))
            .then(userInfo => {
                let userName = userInfo.val().userName; 
                let alertElement = document.createElement('div'); 
                alertElement.classList.add('alert', 'alert-success', 'absolute', 'top-5', 'font-bold', 'text-center', 'z-40')
                alertElement.textContent = `Welcome ${userName}`
                //? append to modalWrapper
                let modalWrapper = document.querySelector('.contactsCont'); 
                modalWrapper.appendChild(alertElement); 
                setTimeout(() => {
                    modalWrapper.removeChild(alertElement)
                }, 1500)
            })
    })
}

  let retrieveMessages = () => {
    auth.onAuthStateChanged(cred => {
      let uid = cred.uid; 
      let dbRef = ref(db); 
      get(child(dbRef, `users/${uid}/contacts/`))
        .then(contacts => {
          contacts.forEach(contact => {

          })
        })
    })
  }

  greetUser(); 
  
  return (
    <div>
      <div className='contactsCont flex flex-col items-center'>
        <div className='contact w-[99%] h-16 bg-slate-50 mt-1 border-b-2 border-t-2 border-slate-200 flex items-center gap-2 text-ellipsis overflow-hidden whitespace-nowrap p-2'>
          <h1 className='userName text-black'>Timothy : </h1>
          <p className='newest Msg text-slate-600'>whats up dawgy dog dawgydawgydawgydawgydawgy </p>
        </div>
      </div>
    </div>
  )
}

export default Inbox