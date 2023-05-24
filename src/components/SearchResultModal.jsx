import React, { useState } from 'react'
import MessageModal from './MessageModal';

const SearchResultModal = ({closeSearchResultModal, searchTarget}) => {
    let [messageModal, setMessageModal] = useState(false); 

    let closeMessageModal = () => {
        setMessageModal(false); 
    }


    
  return (
    <div >
        {/* The button to open modal */}
        <label htmlFor="message-modal" className="btn btn-ghost">
            <p className='w-full h-full'>Send Message</p>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="message-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label onClick={closeSearchResultModal} htmlFor="message-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold text-left">{searchTarget}</h3>
            {/* <MessageModal/> */}
            <button className="btn btn-ghost btn-error">report</button>
            {messageModal ? <MessageModal closeMessageModal={closeMessageModal} messageModal={messageModal}/> : null}
        </div>
        </div>
    </div>
  )
}

export default SearchResultModal