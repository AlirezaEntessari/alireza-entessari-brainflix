import Header from './components/Header/Header';
import { CommentList } from '../../components/Comment-List';
import { useState } from "react";
import { Hero } from '../../components/Hero';
import { Sidebar } from '../../components/Sidebar';
import { Description } from '../../components/Description';
import { AddComment } from '../../components/AddComment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export function HomePage() {
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
