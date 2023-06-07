import React, { useState } from 'react'
import { auth, db } from './components/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import '../tailwind.css'
import Auth from './components/Auth'
import Landing from './components/Landing'
import './styles/main.css'
import Loader from './components/animations/Loader'
import { child, ref, set } from 'firebase/database'

const App = () => {
    let [userAuth, setUserAuth] = useState(false); 
    let [loader, setLoader] = useState(true); 

    auth.onAuthStateChanged(cred => {
        cred ? setUserAuth(true) : setUserAuth(false); 
        let uid = cred.uid 
        set(ref(db, `users/${uid}/`),{
          authStatus: 'Online',
        })
          .then(() => {
            console.log('online'); 
          })
    })
    window.addEventListener('beforeunload', () => {
      auth.onAuthStateChanged(cred => {
        let uid = cred.uid
        set(ref(db, `users/${uid}/`),{
          authStatus: 'Offline',
        })
        .then(() => {
          console.log('online'); 
        })
    })
    })
    setTimeout(() => {
      setLoader(false)
    }, 2000)



  return (
    <div>
        { loader ? <Loader/> : null}
        {
            userAuth ? <Landing/> : <Auth/>
        }
    </div>
  )
}

export default App