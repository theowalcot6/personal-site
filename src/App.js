import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from './pages/ProjectPage';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Work from './pages/Work.js';
import Projects from './pages/Projects';
import Navigation from './Navigation.js';


const App = () => {
  return (
          <div className="App">
              <Router>
                <Navigation/>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/work" element={<Work extra='extra' added=''/>} />
                  <Route path="/work/:projectId" element = {<ProjectPage/>}/>
                  <Route path="/projects" element={<Projects/>} />
                  <Route path="/about" element={<About/>} />
                </Routes>
              </Router>
          </div>
  )
}

export default App;
