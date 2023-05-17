import React, { useState } from 'react'
import { auth, db } from './components/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import '../tailwind.css'
import Auth from './components/Auth'
import Landing from './components/Landing'
import './styles/main.css'

const App = () => {
    let [userAuth, setUserAuth] = useState(false); 

    auth.onAuthStateChanged(cred => {
        cred ? setUserAuth(true) : setUserAuth(false); 
    })

  return (
    <div>
        {
            userAuth ? <Landing/> : <Auth/>
        }
    </div>
  )
}

export default App