import './Upload.scss'
import Thumbnail from '../../assets/images/Images/Upload-video-preview.jpg'

export const Upload = () => {

    return (
        <>
            <div className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <div className="upload__container">
                    <div className="upload__thumbnail">
                        <p className='upload__thumbnail--label'>VIDEO THUMBNAIL</p>
                        <img className='upload__thumbnail--image' src={ Thumbnail } alt="Video Thumbnail" />
                    </div>
                    <div className="upload__inputs--container">
                        <label className='upload__label' htmlFor="upload__input">TITLE YOUR VIDEO</label>
                        <input type="text" id="upload__input"  className='upload__input' placeholder='Add a title to your video' />
                        <label className='upload__description--label' htmlFor="upload__description">ADD A VIDEO DESCRIPTION</label>
                        <textarea className='upload__description' id="upload__description" cols="30" rows="10">Add a description to your video</textarea>
                    </div>
                </div>
            </div> 
        
        </>
       
    )
}