// import './App.css';
import Header from './components/Header/Header';
import { CommentList } from './components/Comment-List/CommentList';
import videoData from "./data/Data/video-details.json"
import { useState } from "react";
import { Hero } from './components/Hero/Hero';
 

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 

  return (
    <div className="App">
      <Header/>
      <Hero image={videoDetails.image}/>
      <CommentList comments={videoDetails.comments}/>
      
    </div>
  );
}

export default App;
