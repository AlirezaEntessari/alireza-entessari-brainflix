import './Sidebar.scss'

const Sidebar = ( {sideBarDetails} ) => {

    // useEffect(() => {
    //     const getVideos = async () => {
    //         const { data } = await axios.get(`${baseApiUrl}/videos/?api_key=${apiKey}`);
    //         console.log(data);
    //         setCommentsData(data);
    //     }
    
    //     getVideos();
    //   }, [])



    return (
        <>
            <div className='sidebar'>
                <h3 className='sidebar__header'>NEXT VIDEOS</h3>
                {sideBarDetails.map(video => {
                    return (
                        <div>
                            <div className="sidebar__container">
                                <img className="sidebar__image" src={video.image} alt="" />
                                <h3 className="sidebar__title">{video.title} <span className='sidebar__author'>{video.channel}</span></h3>
                            </div>
                        </div>
                    )
                })}
            </div>
       

        </>
    )
}

export { Sidebar };