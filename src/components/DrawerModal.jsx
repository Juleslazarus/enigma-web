import { set } from 'firebase/database';
import React, { useState } from 'react'
import Inbox from './Inbox'
import Favorites from './Favorites'
import Settings from './Settings'
import { FaBars, FaInbox, FaHeart, FaGg } from 'react-icons/fa';

const DrawerModal = () => {
    let [inbox, setInbox] = useState(true); 
    let [favorites, setFavorites] = useState(false); 
    let [settings, setSettings] = useState(false); 
    let [darkMode, setDarkMode] = useState(false); 

    //? handle the drawer button states
    let handleInboxOn = () => {
        setInbox(true)
        setFavorites(false); 
        setSettings(false); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }
    let handleFavoritesOn = () => {
        setInbox(false); 
        setFavorites(true); 
        setSettings(false); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }
    let handleSettingsOn = () => {
        setInbox(false);
        setFavorites(false); 
        setSettings(true); 
        let closeDrawer = document.getElementById('closeDrawer').click()
    }

    let nightModeToggle = () => {
        document.body.removeAttribute('data-theme')
        document.body.setAttribute('data-theme', 'dark')
        setDarkMode(true); 
    }
    let dayModeToggle = () => {
        document.body.removeAttribute('data-theme')
        document.body.setAttribute('data-theme', 'winter')
        setDarkMode(false); 
    }

  return (
    <div>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col-reverse justify-end end">
                {inbox ? <Inbox/> : null}
                {favorites ? <Favorites/> : null}
                {settings ? <Settings/> : null}
                {/* different pages */}
                <label htmlFor="my-drawer" className={("drawer-button flex items-center h-[5%]" +  (darkMode ? "bg-gray-900" : "bg-slate-100"))}>
                    <i htmlFor='my-drawer' className=" text-2xl m-2"><FaBars/></i>
                    <h1 className='mr-[auto] ml-auto'>Enigma</h1>
                </label>
            </div> 
            <div className="drawer-side">
                <label id='closeDrawer' htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content flex flex-col gap-4 ">
                    <li className='bg-slate-100'><a className='text-black' onClick={handleInboxOn}><i className=""><FaInbox/></i> Inbox</a></li>
                    <li className='bg-slate-100'><a className='text-black' onClick={handleFavoritesOn}><i className=""><FaHeart/></i> Favorites</a></li>
                    <li className='bg-slate-100'><a className='text-black' onClick={handleSettingsOn}><i className=""><FaGear/></i> Settings</a></li>
                    <div className='bottomBar bg-slate-100 mt-[auto] flex items-center '>
                        <li className='mr-[auto]' ><a>Sign Out</a></li>
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