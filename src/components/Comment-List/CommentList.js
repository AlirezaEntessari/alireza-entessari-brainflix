import { Comment } from "../Comment/Comment";


export const CommentList = ( { comments } ) => {
   


    return (
        <>
            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}    
                    />
                )
            })}


        </>
    )
}

