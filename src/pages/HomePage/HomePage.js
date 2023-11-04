import Header from "../../components/Header/Header";
import { CommentList } from "../../components/Comment-List/CommentList";
import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Description } from "../../components/Description/Description";
import { AddComment } from "../../components/AddComment/AddComment";
import { useParams, useNavigate } from "react-router-dom"; 
import sidebarData from '../../data/Data/videos.json';
import { useEffect } from "react";
import axios from "axios";



export function HomePage() {

  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);

  const navigate = useNavigate();

  const { videoId } = useParams();

  const [currentVideo, setCurrentVideo] = useState({});

  // const baseApiUrl = "https://project-2-api.herokuapp.com";
  const baseApiUrl = "http://localhost:8080";
  const apiKey = "62b73dce-4cc3-4a46-88f6-f8146e4b7a2f";


  useEffect(() => {
    const getComments = async () => {
      try{
          console.log(videoId);
          const response = await axios.get(`${baseApiUrl}/videos/${videoId || '84e96018-4022-434e-80bf-000ce4cd12b8'}?api_key=${apiKey}`);
          console.log(response.data);
          setCurrentVideo(response.data);
      } catch(error){
          console.log(error);
          navigate("/404");
      } 
    }

    getComments();
  }, [videoId])

 
  console.log(`${baseApiUrl}/${currentVideo.image}`);

  return (
    <>
      <Header />
      {/* <Hero image={currentVideo.image} /> */}
      <Hero image={`${baseApiUrl}/${currentVideo.image}`} />
      <div className="App__container">
        <div className="App__subcontainer">
          <Description videoDetails={currentVideo} />
          <AddComment />
          <CommentList comments={currentVideo.comments} />
        </div>
        <div className="App__sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
