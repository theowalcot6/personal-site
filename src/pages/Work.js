import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Work.css'

import { Link } from "react-router-dom";

import ProjectData from "../components/ProjectData";

const Work = ({position}) => {
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
    <div class={`Work-Carousel ${position}`}>
        <h2 class='work-carousel-title'>Work Examples</h2>
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {ProjectData.map((project, index) => (
            <div className="carousel-slide" key={index}>
              <img class='carousel-img' src={project.logo} alt={`Carousel ${index + 1}`} />
              <div class='carousel-summary'>
                <p class='carousel-title'>{project.secondary_title}</p>
                <p class='carousel-description'>{project.description}</p>
                <Link class='carousel-link' to={project.links}><p>Find out more</p></Link>
              </div>
            </div>
          ))}
        </div>
        <div class='carousel-buttons'>
          {currentIndex !== 0 ? <button class="prev-button" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button> : <button class="prev-button-disabled" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button>}
          {currentIndex !== ProjectData.length - 1 ? <button class="next-button" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button> : <button class="next-button-disabled" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button>}
        </div>
      </div>
  )
};
 
export default Work;