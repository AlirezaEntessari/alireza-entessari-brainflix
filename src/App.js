import Header from './components/Header/Header';
import { CommentList } from './components/Comment-List/CommentList';
import videoData from "./data/Data/video-details.json"
import { useState } from "react";
import { Hero } from './components/Hero/Hero';
import sidebarData from './data/Data/videos.json';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Description } from './components/Description/Description';
import { AddComment } from './components/AddComment/AddComment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import { HomePage } from './pages/HomePage/HomePage';
import { UploadPage } from './pages/UploadPage/UploadPage';
 

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);


  return (
    <div className="App">
      {/* <Header/>
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
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="upload/:uploadId" element={<UploadPage/>} />
          <Route path="" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
