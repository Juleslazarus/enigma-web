import React from 'react'
import CreateChat from './CreateChat'
import { FaCog, FaInbox, FaListUl } from 'react-icons/fa'
 
const QuickLinks = ({quickHandleInboxOn, quickHandleFavoritesOn, quickHandleChatListOn, quickHandleSettingsOn}) => {
    return (
        <div className="btm-nav bg-base-200 ">
            <button className='bg-base-200 active:bg-base-300' onClick={quickHandleInboxOn}>
                <i className='text-lg'>
                    <FaInbox/>
                </i>
            </button>
            <button className="bg-base-200 active:bg-base-300">
                <i className='text-lg'>
                    <CreateChat/>
                </i>
            </button>
            <button className='bg-base-200 active:bg-base-300' onClick={quickHandleChatListOn}>
                <i className='text-lg'>
                    <FaListUl/>
                </i>
            </button>
        </div>
        )
}

export default QuickLinks