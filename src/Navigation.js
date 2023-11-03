import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react"

import './Navigation.css'

import { useLocation } from 'react-router-dom';
  
function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { pathname } = useLocation();


  return (
        <ul class="Navigation">
          <div class='home-container'>
            <NavLink className="nav-link" to="/" onClick={() => {setIsNavExpanded(false)}}>
              THEO WALCOT
            </NavLink>
          </div>
          <div class='nav-container'>
            <div class={isNavExpanded ? "nav-normal expanded" : "nav-normal"}>
              <li className="nav-item">
              <div class={`nav-background ${pathname === '/work' ? 'back-active' : ''}`}>
                <NavLink className="nav-link" to="/work" onClick={() => {setIsNavExpanded(false)}}>
                  Work
                </NavLink>
                </div>
              </li>
              <li className='nav-item'>
              <div class={`nav-background ${pathname === '/projects' ? 'back-active' : ''}`}>
                <NavLink className="nav-link" to="/projects" onClick={() => {setIsNavExpanded(false)}}>
                  Projects
                </NavLink>
              </div>
              </li>
              <li className="nav-item">
              <div class={`nav-background ${pathname === '/about' ? 'back-active' : ''}`}>
                <NavLink className="nav-link" to="/about" onClick={() => {setIsNavExpanded(false)}}>
                  About
                </NavLink>
                </div>
              </li>
            </div>
            <div class='button-holder'>
              <a href={require("./static/Theo_Walcot_CV.pdf")} download="Theo's CV" class='primary-button-home-inner'><button class='primary-button-home'>Hire Me!</button></a>
            </div>
            <div className='nav-responsive'>
              <button
                className='nav-responsive-item'
                onClick={() => setIsNavExpanded(!isNavExpanded)}
              >
              <FontAwesomeIcon
                icon={isNavExpanded ? faTimes : faBars}
                className='hamburger-icon'
              />
              </button>
            </div>
          </div>
        </ul>
  );
}

export default Navigation;