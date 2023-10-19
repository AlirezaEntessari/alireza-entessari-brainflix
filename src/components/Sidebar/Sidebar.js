import './Sidebar.scss'

const Sidebar = ( {sideBarDetails} ) => {
    return (
        <>
            <div className='sidebar'>
                {sideBarDetails.map(video => {
                    return (
                        <div>
                            <img className="sidebar__image" src={video.image} alt="" />
                            <h3 className="sidebar__title">{video.title}</h3>
                        </div>
                    )
                })}
            </div>
            




        </>
    )
}

export { Sidebar };