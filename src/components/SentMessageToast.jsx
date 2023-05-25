import React from 'react'

const SentMessageToast = ({searchTarget}) => {
  return (
    <div className='wrapper'>
        <div className="toast toast-start">
            <div className="alert alert-success">
                <div>
                <span>Message sent to {searchTarget} successfully.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SentMessageToast