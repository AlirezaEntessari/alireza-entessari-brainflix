import './Comment.scss'

const Comment = ( { name, comment, timestamp } ) => {
    return (

        <div className="comment">
            <div className="comment__name">{ name }</div>
            <div className="comment__comment">{ comment }</div>
            <div className="comment__timestamp">{ timestamp }</div>
        </div>
       
    )
}

export { Comment };