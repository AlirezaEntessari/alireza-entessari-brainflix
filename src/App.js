import videoData from "./data/Data/video-details.json"
import { useState } from "react";
import sidebarData from './data/Data/videos.json';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.scss'
import { HomePage } from './pages/HomePage/HomePage';
import { UploadPage } from './pages/UploadPage/UploadPage';
import { NotFound } from './pages/NotFound/NotFound'; 
 

function App() {

  const [ videoDetails, setVideoDetails ] = useState(videoData[0]); 
  const [ sideBarDetails, setSidebarDetails ] = useState(sidebarData);

  const { uploadId } = useParams();


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/upload" element={<UploadPage/>} />
          <Route path="/videos/:videoId" element={<HomePage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
