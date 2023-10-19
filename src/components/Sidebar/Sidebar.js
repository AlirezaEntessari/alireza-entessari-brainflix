

const Sidebar = ( {sideBarDetails} ) => {
    return (
        <>
            {sideBarDetails.map(video => {
                return (
                    <div>
                        <img src={video.image} alt="" />
                        <h3>{video.title}</h3>
                    </div>
                )
            })}




        </>
    )
}

export { Sidebar };