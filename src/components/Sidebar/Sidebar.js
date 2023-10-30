import { useEffect, useState } from 'react'
import './Sidebar.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [allVideos, setAllVideos] = useState([]);

    const baseApiUrl = "https://project-2-api.herokuapp.com";
    const apiKey = "62b73dce-4cc3-4a46-88f6-f8146e4b7a2f";

    useEffect(() => {
        const getVideos = async () => {
            try{
                const response = await axios.get(`${baseApiUrl}/videos/?api_key=${apiKey}`);
                setAllVideos(response.data);
            } catch(error){
                console.log(error);
            }
          
        }

        getVideos();
    }, [])



    return (
        <>
            <div className='sidebar'>
                <h3 className='sidebar__header'>NEXT VIDEOS</h3>
                {allVideos.map(video => {
                    return (
                        <Link className='sidebar__link' to={`/videos/${video.id}`}>
                            <div className="sidebar__container">
                                <img className="sidebar__image" src={video.image} alt={video.title} />
                                <h3 className="sidebar__title">{video.title} <span className='sidebar__author'>{video.channel}</span></h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
       

        </>
    )
}

export { Sidebar };