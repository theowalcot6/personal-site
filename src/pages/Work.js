import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Work.css'

import { Link } from "react-router-dom";

import ProjectData from "../components/ProjectData";

import React from 'react' 

import PropTypes from 'prop-types'; // Import PropTypes

import Footer from "../components/Footer";

const Work = ({position, extra, footer}) => {
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
    <div className={`Work-Carousel ${position}`}>
        <h6 className={`work-carousel-title ${extra} `}>Work Examples</h6>
        <div className={`carousel ${extra} `} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {ProjectData.map((project, index) => (
            <div className="carousel-slide" key={index}>
              <img className='carousel-img' src={project.logo} alt={`Carousel ${index + 1}`} />
              <div className='carousel-summary'>
                <p className='carousel-title'>{project.secondary_title}</p>
                <p className='carousel-description'>{project.description}</p>
                <Link className='carousel-link' to={project.links}><p>Find out more</p></Link>
              </div>
            </div>
          ))}
        </div>
        <div className='carousel-buttons'>
          {currentIndex !== 0 ? <button className="prev-button" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button> : <button className="prev-button-disabled" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>}
          {currentIndex !== ProjectData.length - 1 ? <button className="next-button" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button> : <button className="next-button-disabled" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>}
        </div>
      </div>
      {footer === 'no' ? null : <Footer styling={'free'} />}
      </>
  )
};

Work.propTypes = {
  position: PropTypes.string,
  extra: PropTypes.string,

};
 
export default Work;