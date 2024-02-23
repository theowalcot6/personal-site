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
      <div className='Home' ref={section0Ref}>
        <img src={Profile} alt='Profile'></img>
        <div className='Name-and-title'>
          <h2 className='name'>Theo Walcot</h2>
          <p className='title'>Product Manager, Data Scientist and Web Developer</p>
          <div className='Home-CTAs'>
            <a href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV" className='primary-button-home-inner'><button className='primary-button-home'>Download CV</button></a>
            <Link to='/projects' className='secondary-button-home-link'><button className='secondary-button-home'>My Projects</button></Link>
          </div>
        </div>
        <button onClick={() => scrollToNextSection(section1Ref)} id='s1' className='scroll-down-button'><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
      <div className='Services' ref={section1Ref}>
        <button onClick={() => scrollToNextSection(section0Ref)} id='s3' className='scroll-down-button'><FontAwesomeIcon icon={faArrowUp} /></button>
        <div className='skills-image'>
          <img src={Study} alt='study' width='480'/>
        </div>
        <div className="skills-container">
          <h6>8 years experience building high-class technologies!</h6>
          <div className="skill">
            <div className="skill-name">PYTHON (FLASK AND DJANGO)</div>
            <div className="skill-bar">
              <div className="skill-level skill-level-100 bluebar"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">REACT</div>
            <div className="skill-bar">
              <div className="skill-level skill-level-100 lightbluebar"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">DATA SCIENCE</div>
            <div className="skill-bar">
              <div className="skill-level skill-level-80 aquabar"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">PRODUCT MANAGEMENT</div>
            <div className="skill-bar">
              <div className="skill-level skill-level-100 lightgreenbar"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">SQL, MYSQL and MONGODB</div>
            <div className="skill-bar">
              <div className="skill-level skill-level-80 greenbar"></div>
            </div>
          </div>
          <div className='skill-section-CTAs'>
          <a href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV" className='primary-button-home-inner'><button className='third-button-home'>Hire Me!</button></a>
            <Link to='/about' className='secondary-button-home-link'><button className='secondary-button-home'>About Me</button></Link>
          </div>
        </div>
        <button onClick={() => scrollToNextSection(section2Ref)} id='s2' className='scroll-down-button'><FontAwesomeIcon icon={faArrowDown} /></button>
      </div>
      <div className='Carousel' ref={section2Ref}>
        <div className='carousel-buttons'>
        {currentIndex !== 0 ? <button className="prev-button" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button> : <button className="prev-button-disabled" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>}
        {currentIndex !== 2 ? <button className="next-button" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button> : <button className="next-button-disabled" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>}
        </div>
      </div>
      <Work position='p1' footer='no' added='/work/' />
      <Footer styling={'three-hundred'} />
    </>
    );
  }

export default Home;
