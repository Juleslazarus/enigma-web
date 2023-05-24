import React, { useState } from 'react'
import { auth, db } from './Firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';

const RegisterModal = () => {
    let [userInput, setUserInput] = useState(''); 
    let [emailInput, setEmailInput] = useState(''); 
    let [passInput, setPassInput] = useState(''); 
    let [emailTab, setEmailTab] = useState(true); 
    let [userTab, setUserTab] = useState(false); 


    let closeModal = () => {
        setUserInput(''); 
        setEmailInput(''); 
        setPassInput(''); 
    }
    
    let emailLogIn = () => {
        let email = emailInput; 
        let password = passInput; 
        signInWithEmailAndPassword(auth, email, password); 
    }

    let userLogIn = () => {
        let userName = userInput; 
        let password = passInput; 
        auth.onAuthStateChanged(cred => {
            let dbRef = ref(db); 
            get(child(dbRef, `user-index/${userName}/`))
                .then(userInfo => {
                    let email = userInfo.val().email
                    if (password === userInfo.val().pass && userName === userInfo.val().userName) {
                        signInWithEmailAndPassword(auth, email, password); 
                        closeModal(); 
                        console.log(email); 
                        console.log(userInfo.val().password)
                        console.log('user logged in')
                    } else {
                        let alertElement = document.createElement('div'); 
                        alertElement.classList.add('alert', 'alert-error', 'absolute', 'top-5', 'font-bold', 'text-center')
                        alertElement.textContent = "User Credentials Don't Match Database"; 
                        let warningImg = document.createElement('img'); 
                        warningImg.src = './warning.png'
                        warningImg.classList.add('h-[auto]', 'w-[25px]', 'absolute', 'right-5')
                        alertElement.appendChild(warningImg); 
                        //? append to modalWrapper
                        let modalWrapper = document.querySelector('.modalWrapper'); 
                        modalWrapper.appendChild(alertElement); 
                        setTimeout(() => {
                            modalWrapper.removeChild(alertElement)
                        }, 3500)
                    } 
                })
                .catch(err => {
                    let alertElement = document.createElement('div'); 
                        alertElement.classList.add('alert', 'alert-error', 'absolute', 'top-5', 'font-bold', 'text-center')
                        alertElement.textContent = "User Credentials Don't Match Database"
                        let warningImg = document.createElement('img'); 
                        warningImg.src = './warning.png'
                        warningImg.classList.add('h-[auto]', 'w-[25px]', 'absolute', 'right-5')
                        alertElement.appendChild(warningImg); 
                        //? append to modalWrapper
                        let modalWrapper = document.querySelector('.modalWrapper'); 
                        modalWrapper.appendChild(alertElement); 
                        setTimeout(() => {
                            modalWrapper.removeChild(alertElement)
                        }, 3500)
                })
        })
    }

    let handleEmailTab = () => {
        let emailTab = document.querySelector('.emailTab'); 
        let userTab = document.querySelector('.userTab'); 
        
        emailTab.classList.add('tab-active'); 
        userTab.classList.remove('tab-active'); 
        setEmailTab(true); 
        setUserTab(false); 
    }

    let handleUserTab = () => {
        let emailTab = document.querySelector('.emailTab'); 
        let userTab = document.querySelector('.userTab'); 
        
        emailTab.classList.remove('tab-active'); 
        userTab.classList.add('tab-active'); 
        setEmailTab(false); 
        setUserTab(true); 
    }

    return (
        <>
            <label htmlFor="log-modal" className="btn btn-primary btn-wide">Log In</label>

            <input type="checkbox" id="log-modal" className="modal-toggle" />
            <div className="modalWrapper modal">
            <div className="modal-box relative flex flex-col justify-center gap-4 items-center">
                <label htmlFor="log-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</label>
                <h3 className="text-lg font-bold text-center text-black">Log In</h3>
                <div className="tabs">
                    <a className="emailTab tab tab-bordered tab-active" onClick={handleEmailTab}>Email</a> 
                    <a className="userTab tab tab-bordered" onClick={handleUserTab}>User Name</a> 
                </div>
                {userTab ? <input className='userInput input input-primary' type='text' placeholder='User Name' value={userInput} onInput={(e) => {setUserInput(e.target.value)} }/> : null}
                {emailTab ? <input className='emailInput input input-primary' type='email' placeholder='Email' value={emailInput} onInput={(e) => {setEmailInput(e.target.value)} }/> : null}
                <input className='passInput input input-primary' type='password' placeholder='Password' value={passInput} onInput={(e) => {setPassInput(e.target.value)} }/>
                <br></br>
                {emailTab ? <button className='btn btn-primary' onClick={emailLogIn}>Log In </button> : null}
                {userTab ? <button className='btn btn-primary' onClick={userLogIn}>Log In </button> : null}
            </div>
            </div>
        </>
    )
}


export default RegisterModal