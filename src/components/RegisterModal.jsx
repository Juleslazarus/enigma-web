import React, { useState } from 'react'
import { auth, db } from './Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
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

    let intArr =[]

    let handleIntEnterKey = (e) => {
        if(e.keyCode === 13) {
            let addBtn = document.getElementById('addBtn').click(); 
        }
    }

    let handleInterests = () => {
        if (intCount === 5) {
            let alertElement = document.createElement('div'); 
            alertElement.classList.add('alert', 'alert-error', 'absolute', 'top-5', 'font-bold', 'text-center', 'flex', 'justify-center')
            alertElement.textContent = '5/5 Interests Set'; 
            let warningImg = document.createElement('img'); 
            warningImg.src = './warning.png'
            warningImg.classList.add('h-[auto]', 'w-[25px]', 'absolute', 'right-5')
            alertElement.appendChild(warningImg); 
            //? append to modalWrapper
            let modalWrapper = document.querySelector('.modalWrapper'); 
            modalWrapper.appendChild(alertElement); 
            console.log(interests); 
            setTimeout(() => {
                modalWrapper.removeChild(alertElement)
            }, 3500)
        } else if (intCount <= 5) {
            setIntCount(intCount => intCount + 1); 
            let interest = intInput
            let tagElement = document.createElement('div')
            tagElement.classList.add('badge', 'badge-primary', 'badge-outline')
            let tagText = document.createElement('p'); 
            tagText.textContent = interest; 
            tagText.classList.add('p-2', 'text-black')
            // tagElement.textContent = interest;
            let intTagsCont = document.querySelector('.intTagsCont'); 
            tagElement.appendChild(tagText); 
            intTagsCont.appendChild(tagElement); 
            addInterest([...interests, interest]); 
            
        }
        setIntInput(''); 
    }

    
    let userInputRegistration = () => {
        let user = userInput; 
        let email = emailInput; 
        let password = passInput; 
        let dbRef = ref(db) 
        
        get(child(dbRef, `user-index/${user}/`))
            .then(user => {
                if (user === '' || email === '' || password === '') {
                    let alertElement = document.createElement('div'); 
                    alertElement.classList.add('alert', 'alert-error', 'absolute', 'top-5', 'font-bold', 'text-center')
                    alertElement.textContent = 'You Must Fill In The Input Fields To Register An Account!'; 
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
                } else if (user.exists()) { /* checks to see if the username is in use */
                    let alertElement = document.createElement('div'); 
                    alertElement.classList.add('alert', 'alert-error', 'absolute', 'top-5', 'font-bold', 'text-center')
                    alertElement.textContent = 'User In Use Log In Or Pick Another User Name'; 
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

                } else {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then(() => {
                            auth.onAuthStateChanged(cred =>{
                                let userName = userInput; 
                                let uid = cred.uid; 
                                set(ref(db, `users/${uid}/`), {
                                    userName: userName, 
                                    email: email, 
                                    uid: uid
                                }), 
                                set(ref(db, `user-index/${userName}/`), {
                                    uid: uid, 
                                    userName: userName, 
                                    email: email, 
                                    pass: password
                                }),
                                interests.forEach(interest => {
                                    auth.onAuthStateChanged(cred => {
                                        let uid = cred.uid; 
                                        let int = interest;
                                        let userName = userInput 
                                        set(ref(db, `users/${uid}/interests/${int}/`), {
                                            interest: int
                                        }), 
                                        set(ref(db, `user-index/${userName}/interests/${int}/`), {
                                            interest: int, 
                                        })
                                    })
                                })
                            })
                        })
                }
            }) 

    }
            return (
        <>
            <label htmlFor="reg-modal" className="btn btn-primary btn-wide">Sign Up</label>

            <input type="checkbox" id="reg-modal" className="modal-toggle" />
            <div className="modalWrapper modal">
            <div className="modal-box relative flex flex-col justify-center gap-4">
                <label htmlFor="reg-modal" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</label>
                <h3 className="text-lg font-bold text-center text-black">Register</h3> 
                <input className='userInput input input-primary' type='text' placeholder='User Name' value={userInput} onInput={(e) => {setUserInput(e.target.value)} }/>
                <input className='emailInput input input-primary' type='email' placeholder='Email' value={emailInput} onInput={(e) => {setEmailInput(e.target.value)} }/>
                <input className='passInput input input-primary' type='password' placeholder='Password' value={passInput} onInput={(e) => {setPassInput(e.target.value)} }/>
                <div className='interestCont flex items-center justify-center'>
                    <input className='interestInput input w-full input-primary' type='text' placeholder='Set 5 Interests!' value={intInput} onKeyDown={handleIntEnterKey} onInput={(e) => { setIntInput(e.target.value);  }}/>
                    <button id='addBtn' className='btn btn-primary' onClick={handleInterests}>Add</button>
                </div>
                <div className='intTagsCont flex flex-wrap gap-2w'>
                    {/* the tags for each interest will go here */}

                </div>
                <br></br>
                <button className='btn btn-primary' onClick={userInputRegistration}>Register</button>
            </div>
            </div>
        </>
    )
}


export default RegisterModal