// import './App.css';
import Header from './components/Header/Header';
import { CommentList } from './components/Comment-List/CommentList';
import videoData from "./data/Data/video-details.json"
import { useState } from "react";
import { Hero } from './components/Hero/Hero';
import sidebarData from './data/Data/videos.json';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Description } from './components/Description/Description';
import { AddComment } from './components/AddComment/AddComment';
 

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);


  return (
    <div className="App">
      <Header/>
      <Hero image={videoDetails.image}/>
      <Description videoDetails={videoDetails}/>
      <AddComment/>
      <CommentList comments={videoDetails.comments}/>
      <Sidebar sideBarDetails={sideBarDetails}/>
      
    </div>
  );
}

export default App;
