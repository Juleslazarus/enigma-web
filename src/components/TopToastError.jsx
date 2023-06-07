import React from 'react'

const TopToastError = (props) => {
  return (
    <div className='wrapper'> 
        <div className="toast toast-start">
            <div className="alert alert-error">
                <div>
                <span className='text-sm text-center'>{props.errText}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopToastError