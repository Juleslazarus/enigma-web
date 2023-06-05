import { child, get, ref, set } from 'firebase/database';
import React, { useState } from 'react'
import Inbox from './Inbox'
import Favorites from './Favorites'
import Settings from './Settings'
import { FaBars, FaInbox, FaHeart, FaCog, FaListUl } from 'react-icons/fa';
import SearchModal from './CreateChat';
import { auth, db } from './Firebase';
import { signOut } from 'firebase/auth';
import SpeedDialModal from './SpeedDialModal';
import ChatList from './ChatList';

const DrawerModal = () => {
    let [inbox, setInbox] = useState(true); 
    let [favorites, setFavorites] = useState(false); 
    let [chatList, setChatList] = useState(false); 
    let [settings, setSettings] = useState(false); 
    let [darkMode, setDarkMode] = useState(false); 

    //? greet user on sign in 
    

    //? handle the drawer button states
    let handleInboxOn = () => {
        setInbox(true)
        setFavorites(false); 
        setChatList(false); 
        setSettings(false); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }
    let handleFavoritesOn = () => {
        setInbox(false); 
        setFavorites(true); 
        setChatList(false); 
        setSettings(false); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }
/*  */
    let handleChatListOn = () => {
        setInbox(false); 
        setFavorites(false); 
        setChatList(true); 
        setSettings(false); 
        let closeDrawer = document.getElementById('closeDrawer').click(); 
    }
/*  */
    let handleSettingsOn = () => {
        setInbox(false);
        setFavorites(false); 
        setChatList(false); 
        setSettings(true); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }

    let speedDialInboxOn = () => {
        setInbox(true)
        setFavorites(false); 
        setChatList(false); 
        setSettings(false); 
        let closeSpeedDial = document.getElementById('closeSpeedDial').click(); 
    }
    let speedDialFavoritesOn = () => {
        setInbox(false); 
        setFavorites(true); 
        setChatList(false); 
        setSettings(false); 
        let closeSpeedDial = document.getElementById('closeSpeedDial').click(); 
    }
    let speedDialChatListOn = () => {
        setInbox(false); 
        setFavorites(false); 
        setChatList(true); 
        setSettings(false); 
        let closeSpeedDial = document.getElementById('closeSpeedDial').click(); 
    }
    let speedDialSettingsOn = () => {
        setInbox(false);
        setFavorites(false); 
        setChatList(false); 
        setSettings(true); 
        let closeSpeedDial = document.getElementById('closeSpeedDial').click(); 
    }


    let nightModeToggle = () => {
        document.body.removeAttribute('data-theme')
        document.body.setAttribute('data-theme', 'dark')
        let inboxBtn = document.querySelector('.inboxBtn'); 
        let favBtn = document.querySelector('.favBtn')
        let settingsBtn = document.querySelector('.settingsBtn'); 
        let bottomBar = document.querySelector('.bottomBar'); 
        let header = document.querySelector('.header'); 

        inboxBtn.classList.remove('bg-slate-100');
        inboxBtn.classList.add('bg-gray-900'); 

        favBtn.classList.remove('bg-slate-100'); 
        favBtn.classList.add('bg-gray-900');

        settingsBtn.classList.remove('bg-slate-100'); 
        settingsBtn.classList.add('bg-gray-900'); 

        bottomBar.classList.remove('bg-slate-100'); 
        bottomBar.classList.add('bg-gray-900'); 

        header.classList.remove('bg-slate-100'); 
        header.classList.add('bg-gray-900'); 

        setDarkMode(true); 
    }

    let dayModeToggle = () => {
        document.body.removeAttribute('data-theme')
        document.body.setAttribute('data-theme', 'winter')
        setDarkMode(false); 

        let inboxBtn = document.querySelector('.inboxBtn'); 
        let favBtn = document.querySelector('.favBtn')
        let settingsBtn = document.querySelector('.settingsBtn'); 
        let bottomBar = document.querySelector('.bottomBar'); 
        let header = document.querySelector('.header'); 

        inboxBtn.classList.add('bg-slate-100');
        inboxBtn.classList.remove('bg-gray-900'); 

        favBtn.classList.add('bg-slate-100'); 
        favBtn.classList.remove('bg-gray-900');

        settingsBtn.classList.add('bg-slate-100'); 
        settingsBtn.classList.remove('bg-gray-900'); 

        bottomBar.classList.add('bg-slate-100'); 
        bottomBar.classList.remove('bg-gray-900'); 

        header.classList.add('bg-slate-100'); 
        header.classList.remove('bg-gray-900'); 

        setDarkMode(true); 
    }

    let signUserOut = () => {
        auth.signOut(); 
    }


  return (
      <div className='h-screen w-full overflow-hidden'>
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="modalWrapper drawer-content flex flex-col-reverse justify-end end">
            <SpeedDialModal speedDialInboxOn={speedDialInboxOn} speedDialFavoritesOn={speedDialFavoritesOn} speedDialSettingsOn={speedDialSettingsOn} speedDialChatListOn={speedDialChatListOn} />
                {/* <SearchModal/> */}
                {inbox ? <Inbox/> : null}
                {favorites ? <Favorites/> : null}
                {chatList ? <ChatList/> : null}
                {settings ? <Settings/> : null}
                {/* different pages */}
                <label className='header drawer-button flex items-center h-[5%]'>
                    <label htmlFor='my-drawer' className='p-2'>
                        <i htmlFor='my-drawer' className=" text-1xl m-2 cursor-pointer lg:hidden"><FaBars/></i>
                    </label>
                </label>
            </div> 
            <div className="drawer-side">
                <label id='closeDrawer' htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu pt-4 pb-4 pr-1 pl-1 w-80 text-base-content flex flex-col gap-4 bg-base-300 ">
                    <li className='inboxBtn bg-base-100 rounded-md'><a className='text-black' onClick={handleInboxOn}><i className=""><FaInbox/></i> Inbox</a></li>
                    <li className='favBtn bg-base-100 rounded-md'><a className='text-black' onClick={handleFavoritesOn}><i className=""><FaHeart/></i> Favorites</a></li>
                    <li className='favBtn bg-base-100 rounded-md'><a className='text-black' onClick={handleChatListOn}><i className=""><FaListUl/></i> Find Chat Rooms</a></li>
                    <li className='settingsBtn bg-base-100 rounded-md'><a className='text-black' onClick={handleSettingsOn}><i className=""><FaCog/></i> Settings</a></li>
                    <div className='bottomBar  mt-[auto] rounded-lg flex items-center bg-base-300 '>
                        <li className='mr-[auto] btn btn-primary btn-outline btn-wide' onClick={signUserOut}><a>Sign Out</a></li>
                        <label className="swap swap-rotate p-2" >
  
                            <input type="checkbox" />
                            
                            <svg onClick={nightModeToggle} className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            
                            <svg onClick={dayModeToggle} className="swap-off fill-current w-7 h-7" /* onClick={nightModeToggle}  */  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>

                            
                            </label>
                    </div>
                
                </ul>
            </div>
    </div>

    </div>
  )
}

export default DrawerModal