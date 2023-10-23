import Header from './components/Header/Header';
import { CommentList } from './components/Comment-List/CommentList';
import videoData from "./data/Data/video-details.json"
import { useState } from "react";
import { Hero } from './components/Hero/Hero';
import sidebarData from './data/Data/videos.json';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Description } from './components/Description/Description';
import { AddComment } from './components/AddComment/AddComment';
import './App.scss'
 

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);


  return (
    <div className="App">
      <Header/>
      <Hero image={videoDetails.image}/>
      <div className='App__container'>
        <div className="App__subcontainer">
          <Description videoDetails={videoDetails}/>
          <AddComment/>
          <CommentList comments={videoDetails.comments}/>
        </div>
        <div className="App__sidebar">
          <Sidebar sideBarDetails={sideBarDetails}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
