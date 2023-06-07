import React from 'react'
import CreateChat from './CreateChat'
import { FaCog, FaInbox, FaListUl } from 'react-icons/fa'
 
const QuickLinks = ({quickInboxOn, quickFavoritesOn, quickChatListOn, quickSettingsOn}) => {
    return (
        <div className="btm-nav bg-base-200 ">
            <button className='bg-base-200 active:bg-base-300' onClick={quickInboxOn}>
                <i className='text-lg'>
                    <FaInbox/>
                </i>
            </button>
            <button className="bg-base-200 active:bg-base-300">
                <i className='text-lg h-full w-full flex justify-center items-center'>
                    <CreateChat/>
                </i>
            </button>
            <button className='bg-base-200 active:bg-base-300' onClick={quickChatListOn}>
                <i className='text-lg'>
                    <FaListUl/>
                </i>
            </button>
        </div>
        )
}

export default QuickLinks