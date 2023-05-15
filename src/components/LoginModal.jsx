import React, { useState } from 'react'
import { auth, db } from './Firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref, set } from 'firebase/database';

const RegisterModal = () => {
    let [userInput, setUserInput] = useState(''); 
    let [emailInput, setEmailInput] = useState(''); 
    let [passInput, setPassInput] = useState(''); 
    let [intInput, setIntInput] = useState(''); 
    let [interests, addInterest] = useState(['']);
    let [intCount, setIntCount] = useState(0); 

    let closeModal = () => {
        setUserInput(''); 
        setEmailInput(''); 
        setPassInput(''); 
        setIntInput(''); 
    }
    
    let userLogIn = () => {
        let email = emailInput; 
        let password = passInput; 
        signInWithEmailAndPassword(auth, email, password); 
    }
            return (
        <>
            <label htmlFor="log-modal" className="btn btn-primary btn-wide">Log In</label>

            <input type="checkbox" id="log-modal" className="modal-toggle" />
            <div className="modalWrapper modal">
            <div className="modal-box relative flex flex-col justify-center gap-4">
                <label htmlFor="log-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</label>
                <h3 className="text-lg font-bold text-center text-black">Log In</h3>
                <input className='userInput input input-primary' type='text' placeholder='User Name' value={userInput} onInput={(e) => {setUserInput(e.target.value)} }/>
                <input className='emailInput input input-primary' type='email' placeholder='Email' value={emailInput} onInput={(e) => {setEmailInput(e.target.value)} }/>
                <input className='passInput input input-primary' type='password' placeholder='Password' value={passInput} onInput={(e) => {setPassInput(e.target.value)} }/>
                <br></br>
                <button className='btn btn-primary' onClick={userLogIn}>Log In </button>
            </div>
            </div>
        </>
    )
}


export default RegisterModal