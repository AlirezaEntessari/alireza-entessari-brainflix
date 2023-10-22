import './AddComment.scss'
import Image from '../../assets/images/Images/Mohan-muruge.jpg'

export const AddComment = () => {
    return (
        <div className='add-comment'>
            <h3 className='add-comment__title'>3 Comments</h3>
            <div className='add-comment__container'>
                <img className='add-comment__image' src={ Image } alt="add comment image" />
                <label className='add-comment__label' htmlFor="add-comment__textbox">JOIN THE CONVERSATION</label>
                <textarea name="comment-textbox" id="add-comment__textbox" className='add-comment__textbox' cols="30" rows="10">Add a new comment</textarea>
            </div>

            <button className='add-comment__button'>COMMENT</button>

        </div>
    )
}