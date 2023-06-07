import React from 'react'
import Inbox from './Inbox'
import Favorites from './Favorites'

const InboxCarousel = () => {
    return (
        <div className="h-screen w-screen carousel">
            <div className="carousel-item w-full">
                <Inbox/>
            </div> 
            <div className="carousel-item w-full">
                <Favorites/>
            </div> 
            
        </div>

    )
}

export default InboxCarousel