import React, { useState } from 'react'
import { auth, db } from './components/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import '../tailwind.css'
import Auth from './components/Auth'
import Landing from './components/Landing'
import './styles/main.css'
import Loader from './components/animations/Loader'

const App = () => {
    let [userAuth, setUserAuth] = useState(false); 
    let [loader, setLoader] = useState(true); 

    auth.onAuthStateChanged(cred => {
        cred ? setUserAuth(true) : setUserAuth(false); 
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