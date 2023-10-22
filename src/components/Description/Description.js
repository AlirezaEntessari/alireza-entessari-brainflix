import './Description.scss'
import Views from '../../assets/icons/Icons/views.svg'
import Likes from '../../assets/icons/Icons/likes.svg'
import React, {useState, useEffect} from 'react'

export const Description = ({videoDetails}) => {

    function formatTimeStamp(timestamp){

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString();

        return formattedDate;

    }


    return (
        <div className="description">
            <h1 className="description__title">{videoDetails.title}</h1>
            <div className='description__container'>
                <div className='description__subcontainer'>
                    <div className="description__top">
                        <span className='description__channel'>By {videoDetails.channel}</span>
                        <span><img className='description__views--icon' src={Views} alt="views icon"/></span>
                        <span className='description__views'>{videoDetails.views}</span>
                    </div>
                    <div className='description__bottom'>
                        <span className='description__date'>{formatTimeStamp(videoDetails.timestamp)}</span>
                        <span><img className='description__likes--icon' src={Likes} alt="views likes"/></span>
                        <span className='description__likes'>{videoDetails.likes}</span>
                    </div>
                </div>
               
            </div>
            <p className="description__description">{videoDetails.description}</p>
        </div>
        
    )
}