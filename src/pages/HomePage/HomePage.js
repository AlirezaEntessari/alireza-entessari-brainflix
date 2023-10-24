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
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import sidebarData from '../../data/Data/videos.json';
import videoData from '../../data/Data/video-details.json';



export function HomePage() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);

  return (
    <>
      <Header />
      <Hero image={videoDetails.image} />
      <div className="App__container">
        <div className="App__subcontainer">
          <Description videoDetails={videoDetails} />
          <AddComment />
          <CommentList comments={videoDetails.comments} />
        </div>
        <div className="App__sidebar">
          <Sidebar sideBarDetails={sideBarDetails} />
        </div>
      </div>
    </>
  );
}
