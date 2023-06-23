import React from 'react';
import './App.css';
import { MainPage } from "./website/pages/MainPage";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ProjectView } from "./website/components/ProjectView";

function App() {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/ProjectView/:id" element={<ProjectView />}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
