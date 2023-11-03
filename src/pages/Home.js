import React from "react";

import './Home.css'
import { useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Profile from '../static/theo.png'

import Footer from "../components/Footer";
import { useState } from "react";

import Study from '../static/study-profile.jpg'

import { Link } from "react-router-dom";
import Work from "./Work";

function Home() {
  const section0Ref = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();

  const scrollToNextSection = (ref) => {
    if (ref.current) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
      };
      ref.current.scrollIntoView(scrollOptions);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

    return (
      <>
      <div class='Home' ref={section0Ref}>
        <img src={Profile} alt='Profile'></img>
        <div class='Name-and-title'>
          <h2 class='name'>Theo Walcot</h2>
          <p class='title'>Product Manager, Data Scientist and Web Developer</p>
          <div class='Home-CTAs'>
            <a href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV" class='primary-button-home-inner'><button class='primary-button-home'>Download CV</button></a>
            <button class='secondary-button-home'><Link to='/projects'>My Work</Link></button>
          </div>
        </div>
        <button onClick={() => scrollToNextSection(section1Ref)} id='s1' class='scroll-down-button'><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
      <div class='Services' ref={section1Ref}>
        <button onClick={() => scrollToNextSection(section0Ref)} id='s3' class='scroll-down-button'><FontAwesomeIcon icon={faArrowUp} /></button>
        <div class='skills-image'>
          <img src={Study} alt='study' width='480'/>
        </div>
        <div class="skills-container">
          <h6>8 years experience building high-class technologies!</h6>
          <div class="skill">
            <div class="skill-name">PYTHON (FLASK AND DJANGO)</div>
            <div class="skill-bar">
              <div class="skill-level skill-level-100 bluebar"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-name">REACT</div>
            <div class="skill-bar">
              <div class="skill-level skill-level-100 lightbluebar"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-name">DATA SCIENCE</div>
            <div class="skill-bar">
              <div class="skill-level skill-level-80 aquabar"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-name">PRODUCT MANAGEMENT</div>
            <div class="skill-bar">
              <div class="skill-level skill-level-100 lightgreenbar"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-name">SQL, MYSQL and MONGODB</div>
            <div class="skill-bar">
              <div class="skill-level skill-level-80 greenbar"></div>
            </div>
          </div>
          <div class='skill-section-CTAs'>
          <a href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV" class='primary-button-home-inner'><button class='third-button-home'>Hire Me!</button></a>
            <Link to='/about' class='secondary-button-home-link'><button class='secondary-button-home'>About Me</button></Link>
          </div>
        </div>
        <button onClick={() => scrollToNextSection(section2Ref)} id='s2' class='scroll-down-button'><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
      <div class='Carousel' ref={section2Ref}>
        <div class='carousel-buttons'>
        {currentIndex !== 0 ? <button class="prev-button" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button> : <button class="prev-button-disabled" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>}
        {currentIndex !== 2 ? <button class="next-button" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button> : <button class="next-button-disabled" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>}
        </div>
      </div>
      <Footer styling={'three-hundred'} />
      <Work position='p1' />
    </>
    );
  }

export default Home;