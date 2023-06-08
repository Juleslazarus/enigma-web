import React, { useRef, useEffect} from 'react'
import Inbox from './Inbox'
import Favorites from './Favorites'

const Home = () => {
    const inboxRef = useRef(); 
    const favRef = useRef(); 

    let handleInboxTab = () => {
        let inboxTab = document.querySelector('.inboxTab')
        let favTab = document.querySelector('.favTab')

        let inboxItem = document.querySelector('.inboxItem')
        let favItem = document.querySelector('.favItem')

        inboxTab.classList.add('tab-active'); 
        favTab.classList.remove('tab-active'); 

        inboxItem.scrollIntoView({behavior:'smooth'})
        
        

    }

    let handleFavTab = () => {
        let inboxTab = document.querySelector('.inboxTab')
        let favTab = document.querySelector('.favTab')

        let inboxItem = document.querySelector('.inboxItem')
        let favItem = document.querySelector('.favItem')

        inboxTab.classList.remove('tab-active'); 
        favTab.classList.add('tab-active'); 
        favItem.scrollIntoView({behavior:'smooth'})

    }

    return (
        <div>
            <div className="tabs w-screen flex fixed lg:justify-start justify-center top-2">
                <a className="inboxTab tab tab-bordered" onClick={handleInboxTab}>Inbox</a> 
                <a className="favTab tab tab-bordered" onClick={handleFavTab}>Favorites</a> 
            </div>
            <div className="h-screen w-full flex overflow-hidden ">
                <div ref={inboxRef} className="inboxItem carousel-item w-full h-screen">
                    <Inbox/>
                </div> 
                <div ref={favRef} className="favItem carousel-item w-full h-screen">
                    <Favorites/>
                </div> 
                
            </div>

        </div>

    )
}

export default Home