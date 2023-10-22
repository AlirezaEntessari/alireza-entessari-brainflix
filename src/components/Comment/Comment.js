import './Comment.scss'
import Image from '../../assets/images/Images/Mohan-muruge.jpg'
import React, {useState, useEffect} from 'react'


const Comment = ( { name, comment, timestamp } ) => {

    const [data, setData] = useState({ timestamp: 0 });
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        setData({ timestamp })

        const date = new Date(data.timestamp);
        const formattedDate = date.toLocaleDateString();

        setFormattedDate(formattedDate);
    }, [data.timestamp]);


    return (

        <div className="comment">
            <div className="comment__container">
                <img className='comment__image' src="" alt="" />
                <div className="comment__name">{ name }</div>
                <div className="comment__timestamp">{ formattedDate }</div>
            </div>
          
            <div className="comment__comment">{ comment }</div>
        </div>

            
    )
}

export { Comment };