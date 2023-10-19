import videoDetails from '../../data/Data/video-details.json'
import { useState } from 'react';

const Hero = ( { image } ) => {
    return (
        <>

        <video className='hero__video' poster={ image }></video>




        </>
    )
}

export { Hero };