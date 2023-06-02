import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import SearchModal from './CreateChat'

const CreateChatModal = () => {
  return (
    <div className=''>
        <label htmlFor="createChatModal" className="float-right"><i className='text-end'><FaRegEdit/></i></label>

            <input type="checkbox" id="createChatModal" className="modal-toggle" />
            <div className="modal ">
            <div className="modal-box w-full h-full relative">
                <label htmlFor="createChatModal" className="btn btn-ghost btn-circle absolute right-2 top-2">✕</label>
                <h1 className="text-lg font-bold">Create Chat Room</h1>
                {/* <SearchModal/> */}
            </div>
            </div>
    </div>
  )
}

export default CreateChatModal