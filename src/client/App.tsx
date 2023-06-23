import React from 'react';
import './App.css';
import { MainPage } from "./website/pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProjectView } from "./website/components/ProjectView";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/ProjectView/:id" element={<ProjectView />}/>
        </Routes>
    </Router>
  );
}

export default App;
