import { Comment }  from "../Comment/Comment";
import { useState, useEffect } from "react";
import axios from "axios";

export const CommentList = ({ comments }) => {

  const commentsList = [];

  const [commentsData, setCommentsData] = useState(commentsList);

//   const baseApiUrl = "https://project-2-api.herokuapp.com";
//   const apiKey = "62b73dce-4cc3-4a46-88f6-f8146e4b7a2f";

//   useEffect(() => {
//     const getComments = async () => {
//         const data = await axios.get(`${baseApiUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`);
//         console.log(data.data);
//         setCommentsData(data.data);
//     }

//     getComments();
//   }, [])

  console.log(commentsData);
  

  return (
    <>
      {comments?.map((comment) => {
        return (
          <Comment
            name={comment.name}
            timestamp={comment.timestamp}
            comment={comment.comment}
            // commentId={comment.id}
            // baseApiUrl={baseApiUrl}
            // apiKey={apiKey}
            key={comment.id}
          />
        );
      })}
    </>
  );
};
