import './Comment.scss'
import Image from '../../assets/images/Images/Mohan-muruge.jpg'


const Comment = ( { name, comment, timestamp } ) => {
    return (

        <div className="comment">
            <div className="comment__container">
                <img className='comment__image' src="" alt="" />
                <div className="comment__name">{ name }</div>
                <div className="comment__timestamp">{ timestamp }</div>
            </div>
          
            <div className="comment__comment">{ comment }</div>
        </div>

            
    )
}

export { Comment };