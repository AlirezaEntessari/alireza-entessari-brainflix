import videoDetails from '../../data/Data/video-details.json'
import { useState } from 'react';
import './Hero.scss'

const Hero = ( { image } ) => {
    return (
        <>
        <div className="hero">
            <video className='hero__video' poster={ image }></video>
        </div>
       

        </>
    )
}

export { Hero };