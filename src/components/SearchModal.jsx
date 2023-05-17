import { child, get, ref } from 'firebase/database';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { db } from './Firebase';


const SearchModal = () => {
    let [searchInput, setSearchInput] = useState(''); 

    let userSearch = () => {
        let search = searchInput; 
        let searchArr = search.split(''); 
        let dbRef = ref(db); 
        get(child(dbRef, `user-index/`))
            .then(users => {
                users.forEach(user => {
                    let userResult = user.val().userName; 
                    let resultArr = userResult.split(''); 
                    if (resultArr[0] === searchArr[0] || resultArr[0] === searchArr[0] && resultArr[1] === searchArr[1] && resultArr[2] === searchArr[2]) {
                        console.log(userResult + ' is the result '); 
                        let searchResultsCont = document.querySelector('.searchResultsCont'); 
                        let resultDiv = document.createElement('div'); 
                        let resultsText = document.createElement('p'); 
                        resultDiv.classList.add('h-10', 'w-[95%]', 'text-left', )
                        resultsText.textContent = userResult; 
                        resultDiv.appendChild(resultsText); 
                        searchResultsCont.appendChild(resultDiv); 
                    }
                })
            })
        console.log(searchArr); 
    }

    let handleEnterKey = (e) => {
        if(e.keyCode === 13) {
            let addBtn = document.getElementById('searchBtn').click(); 
        }
    }
  return (
    <div className='z-10'>
        <label htmlFor="searchModal" className="btn btn-ghost absolute top-0 right-0"><FaSearch/></label>

        <input type="checkbox" id="searchModal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative flex flex-col gap-4">
            <label htmlFor="searchModal" className="btn btn-ghost btn-square absolute right-2 top-2">✕</label>
            <h3 className="text-lg text-center font-bold">Search For New Users</h3>
            <div className='searchInputCont'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="searchInput input input-bordered w-full" onKeyDown={handleEnterKey} onInput={(e) => { setSearchInput(e.target.value);  } } />
                        <button id='searchBtn' className="btn btn-ghost" onClick={userSearch}>
                            <FaSearch/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='searchResultsCont h-[50vh] bg-ghost z-10'>
                {/* user search results will go here! */}

            </div>
        </div>
        </div>
    </div>
  )
}

export default SearchModal