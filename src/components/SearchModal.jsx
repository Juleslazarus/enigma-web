import { child, get, ref } from 'firebase/database';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { db } from './Firebase';
// import RegisterModal from './RegisterModal';
import MessageModal from './MessageModal';


const SearchModal = () => {
    let [searchInput, setSearchInput] = useState(''); 
    let [searchTarget, setSearchTarget] = useState(''); 
    let [messageModal, setMessageModal] = useState(false); 

    let userSearch = () => {
        let search = searchInput; 
        let searchArr = search.split(''); 
        let dbRef = ref(db); 
        get(child(dbRef, `user-index/`))
            .then(users => {
                let searchResultsCont = document.querySelector('.searchResultsCont'); 
                let exactMatch = document.querySelector('.exactMatch')
                console.log(exactMatch)
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
                                    let searchDivLS = localStorage.setItem('searchTarget', `${e.target.innerHTML}`)
                                    let displaySearchLS = localStorage.getItem('searchTarget'); 
                                    console.log(displaySearchLS + "is the local storage thing"); 
                                    
                                    setSearchTarget(`${displaySearchLS}`)
                                    setMessageModal(true); 
                                })
                            }
                        } else {
                            resultDiv.appendChild(resultsText); 
                            searchResultsCont.appendChild(resultDiv); 
                            resultDiv.addEventListener('click', (e) => {
                                let searchDivLS = localStorage.setItem('searchTarget', `${e.target.innerHTML}`)
                                let displaySearchLS = localStorage.getItem('searchTarget'); 
                                console.log(displaySearchLS + "is the local storage thing"); 
                                
                                setSearchTarget(`${displaySearchLS}`)
                                setMessageModal(true); 
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
            let addBtn = document.getElementById('searchBtn').click(); 
        }
    }
    let emptyInputs = () => {
        let searchInput = document.querySelector('.searchInput')
        let searchResultsCont = document.querySelector('.searchResultsCont');   
        setSearchInput(''); 
        searchResultsCont.innerHTML = ''; 
    }
  return (
    <div>
        <label htmlFor="searchModal" className="btn btn-ghost absolute top-0 right-0"><FaSearch/></label>

        <input type="checkbox" id="searchModal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative flex flex-col gap-4">
            <label htmlFor="searchModal" className="btn btn-ghost btn-square absolute right-2 top-2" onClick={() => { emptyInputs }}>✕</label>
            <h3 className="text-lg text-center font-bold">Search For New Users</h3>

            <div className='searchInputCont'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="searchInput input input-bordered w-full" value={searchInput} onKeyDown={handleEnterKey} onInput={(e) => { setSearchInput(e.target.value); userSearch(); } } />
                        <button id='searchBtn' className="btn btn-ghost" onClick={userSearch}>
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='searchResultsCont h-[50vh] bg-ghost z-10 '>
                <div className='exactMatch h-10 w-[95%] text-left bg-slate-50 '>

                </div>
                {/* user search results will go here! */}
                { messageModal ? <MessageModal closeMessageModal={closeMessageModal} searchTarget={searchTarget}/> : null}
            </div>
        </div>
        </div>
    </div>
  )
}

export default SearchModal