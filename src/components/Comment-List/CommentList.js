import { Comment } from "../Comment/Comment";
import commentData from "../../data/Data/video-details.json"

export const CommentList = () => {
    return (
        <>
            {commentData.map(comment => {
                return (
                    <Comment 
                        key={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}    
                    />
                )
            })}


        </>
    )
}

