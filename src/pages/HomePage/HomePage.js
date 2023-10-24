// import Header from './components/Header/Header';
// import { CommentList } from '../../components/Comment-List';
// import { useState } from "react";
// import { Hero } from '../../components/Hero';
// import { Sidebar } from '../../components/Sidebar';
// import { Description } from '../../components/Description';
// import { AddComment } from '../../components/AddComment';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import sidebarData from './data/Data/videos.json';
// import videoData from "./data/Data/video-details.json"

import Header from "../../components/Header/Header";
import { CommentList } from "../../components/Comment-List/CommentList";
import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Description } from "../../components/Description/Description";
import { AddComment } from "../../components/AddComment/AddComment";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"; 
import sidebarData from '../../data/Data/videos.json';
import videoData from '../../data/Data/video-details.json';
import { useEffect } from "react";
import axios from "axios";



export function HomePage() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);

  console.log(videoDetails.comments);

  const { uploadId } = useParams();


  const [currentVideo, setCurrentVideo] = useState({});

  const baseApiUrl = "https://project-2-api.herokuapp.com";
  const apiKey = "62b73dce-4cc3-4a46-88f6-f8146e4b7a2f";


  useEffect(() => {
    const getComments = async () => {
        const response = await axios.get(`${baseApiUrl}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`);
        // console.log(response.data);
        setCurrentVideo(response.data);
    }

    getComments();
  }, [])

  

  return (
    <>
      <Header />
      <Hero image={currentVideo.image} />
      <div className="App__container">
        <div className="App__subcontainer">
          <Description videoDetails={currentVideo} />
          <AddComment />
          <CommentList comments={currentVideo.comments} />
        </div>
        <div className="App__sidebar">
          <Sidebar sideBarDetails={sideBarDetails} />
        </div>
      </div>
    </>
  );
}
