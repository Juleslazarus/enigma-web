import { child, get, ref, set, update, remove } from 'firebase/database';
import React, { useState } from 'react'
import { FaInbox, FaPlus, FaRegEdit, FaSearch } from 'react-icons/fa'
import { db, auth } from './Firebase';
import TopToastError from './TopToastError';
 
const CreateChat = () => {
    let [searchInput, setSearchInput] = useState(''); 
    let [searchTarget, setSearchTarget] = useState(''); 
    let [messageModal, setMessageModal] = useState(false); 
    let [chatErrorToast, setChatErrorToast] = useState(false); 

    let [chatNameInput, setChatNameInput] = useState(''); 
    let [chatKeyInput, setChatKeyInput] = useState(''); 
    let [privacyStatus, setPrivacyStatus] = useState('')
    let [errText, setErrText] = useState(''); 


    let [chatArr, setChatArr] = useState([])

    let userSearch = () => {
        let search = searchInput; 
        let searchArr = search.split(''); 
        let dbRef = ref(db); 
        get(child(dbRef, `user-index/`))
            .then(users => {
                let searchResultsCont = document.querySelector('.searchResultsCont'); 
                let exactMatch = document.querySelector('.exactMatch')
                // console.log(exactMatch)
                searchResultsCont.innerHTML = ''; 
                users.forEach(user => {
                    let search = searchInput; 
                    let userResult = user.val().userName; 
                    let resultArr = userResult.split(''); 
                    if (resultArr[0] === searchArr[0] || resultArr[0] === searchArr[0] && resultArr[1] === searchArr[1] && resultArr[2] === searchArr[2] || resultArr[0] === searchArr[0] && resultArr[1] === searchArr[1] && resultArr[2] === searchArr[2] && resultArr[3] === searchArr[3] ) {
                        // console.log(userResult + ' is the result '); 
                        let resultDiv = document.createElement('div'); 
                        let resultsText = document.createElement('p'); 
                        resultDiv.classList.add('h-10', 'w-[95%]', 'text-left', 'bg-slate-50' )
                        resultsText.classList.add('p-2', 'z-20')
                        resultsText.textContent = userResult; 
                        if ( search == userResult ) {
                            let searchText  = search.toString(); 
                            let resultText = userResult.toString(); 
                            if (searchText === resultText) {
                                searchResultsCont.innerHTML = ''; 
                                searchResultsCont.appendChild(resultsText); 
                                resultsText.addEventListener('click', (e) => {
                                    console.log(e.target.innerHTML); 
                                    let userBadges = document.querySelector('.userBadges')
                                    let badgeEl = document.createElement('span'); 
                                    badgeEl.classList.add('badge','badge-primary', 'badge-outlined')
                                    badgeEl.textContent = `${e.target.innerHTML}`
                                    userBadges.appendChild(badgeEl)
                                })
                            }
                        } else {
                            resultDiv.appendChild(resultsText); 
                            searchResultsCont.appendChild(resultDiv); 
                            console.log(resultDiv)
                            resultsText.addEventListener('click', (e) => {
                                // let clearSearchTargetLS = localStorage.removeItem('searchTarget'); 
                                // setSearchTarget()
                                // let searchDivLS = localStorage.setItem('searchTarget', `${e.target.innerHTML}`)
                                // let displaySearchLS = localStorage.getItem('searchTarget'); 
                                // console.log(displaySearchLS + "is the local storage thing"); 
                                
                                // setSearchTarget(`${displaySearchLS}`)
                                // let userBadges = document.querySelector('.userBadges')
                                // let userBadgeEl = document.createElement('span'); 
                                // userBadgeEl.classList.add('badge', 'badge-outline', 'badge-primary')
                                // userBadgeEl.textContent = `${searchTarget}`
                                // userBadges.appendChild(userBadgeEl)


                                // console.log(e.target.innerHTML); 
                                // setChatArr([...chatArr, `${e.target.innerHTML}`])
                                // console.log(chatArr); 

                                // let userBadges = document.querySelector('.userBadges')
                                // let badgeEl = document.createElement('span'); 
                                // badgeEl.classList.add('badge','badge-primary', 'badge-outlined')
                                // badgeEl.textContent = `${e.target.innerHTML}`
                                // userBadges.appendChild(badgeEl)

                                
                            })
                            
                        }
                    }
                    if (search === '' || searchArr.length === 1 || searchArr.length === 0) {
                        searchResultsCont.innerHTML = ''; 
                        // console.log('cleared'); 
                    }
                    
                })
            })
        // console.log(searchArr); 
    }

    let closeMessageModal = () => {
        setMessageModal(false); 

    }

    let handleEnterKey = (e) => {
        if(e.keyCode === 13) {
            let searchBtn = document.getElementById('searchBtn').click(); 
        }
    }
    let emptyInputs = () => {
        setChatNameInput(''); 
        setChatKeyInput(''); 
        let chatNInput = document.querySelector('.chatNInput')
        let chatKInput = document.querySelector('.chatKInput')
        chatNInput.value = ''; 
        if(privacyStatus == true) {
            chatKeyInput = ''; 
        } else {
            return false; 
        }
        
    }


    //? this is a good way to deal with setting an array into Local Storage and getting each back labeled and reinserted and retrieved from LS 

    // let arrayLS = () => {
    //     let Arr = [' user1 ', ' user2 ', ' user3 '];
    //     let StoreArr = localStorage.setItem('array', `${Arr}`)
    //     // console.log('function ran! array appended? ')
    //     let getStoredArr = localStorage.getItem('array'); 
    //     let storedArrSplit = getStoredArr.split(' ,')
    //     let storedArrSplitLength = storedArrSplit.length; 
    //     let i =+ 0; 
    //     while(i < storedArrSplit.length) {
    //         // console.log( storedArrSplit[i] )
    //         let individualUserLS = localStorage.setItem(`user${i}`, `${storedArrSplit[i]}`)
    //         let getIndividualUserLS = localStorage.getItem(`user${i}`)
    //         // console.log(getIndividualUserLS + " is the local storage user")
    //         i++
    //     }
    // }
    
    // arrayLS(); 
    
    let handleChatCreate = () => {
        console.log(privacyStatus); 
        if(chatNameInput === '' || chatNameInput === '' && privacyStatus === true && chatKeyInput === '' || privacyStatus === true && chatKeyInput === '' ){
            setErrText('You Must Fill In The Required Fields!')
            setChatErrorToast(true); 
            console.log(errText)
            setTimeout(() => {
                console.time()
                setChatErrorToast(false); 
                setErrText(''); 
                console.log(errText)
                console.timeEnd()
            }, 2000)
        } else {
            if(privacyStatus === 'Private') {
                return true; 
            } else {
                let chatName = `${chatNameInput}`
                let refChatInDB = ref(db)
                auth.onAuthStateChanged(cred => {
                    let uid = cred.uid; 
                    get(child(refChatInDB, `/chatRooms/${chatName}`))
                        .then(chat => {
                            if (chat.exists()) { 
                                setErrText('A Chat Room With That Name Already Exists!')
                                setChatErrorToast(true); 
                                console.log(errText)
                                setTimeout(() => {
                                    console.time()
                                    setChatErrorToast(false); 
                                    setErrText(''); 
                                    console.log(errText)
                                    console.timeEnd()
                                }, 2000)
                            } else {
                                let userRef = ref(db)
                                get(child(userRef, `users/${uid}`))
                                    .then(user_info => {
                                        let userName = user_info.val().userName
                                        set(ref(db, `users/${uid}/local_chats/${chatNameInput}`), {
                                            chatName: chatNameInput, 
                                            createdBy: userName, 
                                            privacyStatus: `${privacyStatus}`, 
                                            key: `${privacyStatus}`, 
                                            users: userName, /* this will set the first user inside the db because they're creating it. when someone joins itll pull this db entry, create an array and then append the new user to the array and update the db entry with the new list */
    
                                        })
    
                                    })
                            }
                        })
                })
            }
        }
    }
  return (
    <div>
        <label htmlFor="searchModal" className="hover:cursor-pointer flex justify-center    "><FaRegEdit/></label>

        <input type="checkbox" id="searchModal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative flex flex-col gap-4">
            <label htmlFor='searchModal' className="btn btn-ghost btn-square absolute right-2 top-2" onClick={emptyInputs}>✕</label>
            <h3 className="text-lg text-center font-bold">Create Chat</h3>



            <div className='setChatNameCont'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Set Chat Room Name" className="chatNInput input input-bordered w-full bg-base-300" onInput={(e) => { setChatNameInput(e.target.value) }}  />
                        <button id='createChat' className="btn btn-ghost" >
                            <FaPlus/>
                        </button>
                    </div>
                </div>
            </div>
            
            {   privacyStatus === 'Private' ?      <div className='setChatIdCont'>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Set Chat Room Key" className="chatKInput input input-bordered w-full bg-base-300" onInput={(e) => { setChatKeyInput(e.target.value) }}  />
                                <button id='createChat' className="btn btn-ghost" >
                                    <FaPlus/>
                                </button>
                            </div>
                        </div>
                    </div> : null}

            {/* will not use this method of adding users to a chat at the moment  */}
            {/* <div className='searchInputCont'>
                <div className="form-control">
                    <div className="input-group">
                    <input type="text" placeholder="Search…" className="searchInput input input-bordered w-full" onKeyDown={handleEnterKey} value={searchInput} onInput={(e) => { setSearchInput(e.target.value); userSearch(); }}/>
                        <button id='searchBtn' className="btn btn-ghost" onClick={userSearch}>
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </div> */}
                {/* <div className='userBadges'> 
                    

                </div>
                 */}
                <div className='chatRoomOptionsCont flex flex-col items-start '>
                    <select className="select select-primary w-full max-w-xs" onChange={(e) => { setPrivacyStatus(`${e.target.value}`)}}>
                        <option disabled selected>Privacy Status</option>
                        <option>Private</option>
                        <option>Public</option>
                    </select>
                </div>
            
            <div className='createBtnCont w-full justify-center flex mt-auto'>
                <button className='btn btn-primary btn-wide' onClick={handleChatCreate}>Create Chat</button>
            </div>
            <div className='toastCont mt-10 flex justify-center items-center text-center'>
                { chatErrorToast ? <TopToastError errText={errText} />: null }

            </div>
        </div>
        </div>
    </div>
  )
}

export default CreateChat