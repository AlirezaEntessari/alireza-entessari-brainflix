import './Hero.scss'

const Hero = ( { image } ) => {
    console.log(image);
    return (
        <>
            <div className="hero">
                <video className='hero__video' poster={ image }></video>
            </div>
       
        </>
    )
}

export { Hero };