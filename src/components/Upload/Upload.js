import './Upload.scss'
import Thumbnail from '../../assets/images/Images/Upload-video-preview.jpg'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Upload = () => {

    const [ myFormData, setMyFormData ] = useState({});

    const handleAllChanges = (event) => {
      setMyFormData({...myFormData, [event.target.name]: event.target.value});
    }

    const navigate = useNavigate();

    const baseApiUrl = "http://localhost:8080";

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(`${baseApiUrl}/videos `, {...myFormData, channel: "Mohan Muruge"});
            // navigate(`/videos/${response.data.id}`);
            navigate(`/`);
            console.log(`/videos/${response.data.id}`);
            console.log(response.data.id);
        }catch(error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <div className="upload__container">
                    <div className="upload__thumbnail">
                        <p className='upload__thumbnail--label'>VIDEO THUMBNAIL</p>
                        <img className='upload__thumbnail--image' src={ Thumbnail } alt="Video Thumbnail" />
                    </div>
                    <form onSubmit={handleSubmit} className="upload__inputs--container">
                        <label className='upload__label' htmlFor="upload__input">TITLE YOUR VIDEO</label>
                        <input onChange={handleAllChanges} type="text" name="title" value={myFormData.title} id="upload__input"  className='upload__input' placeholder='Add a title to your video' />
                        <label className='upload__description--label' htmlFor="upload__description">ADD A VIDEO DESCRIPTION</label>
                        <textarea onChange={handleAllChanges} name="description" value={myFormData.description} className='upload__description' id="upload__description" cols="30" rows="10" placeholder='Add a description to your video'></textarea>
                        <div className="footer">
                            <button className='footer__button'>PUBLISH</button>
                            <p className='footer__text'>CANCEL</p>
                        </div>
                    </form>
                </div>
            </div> 
        
        </>
       
    )
}