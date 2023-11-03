import React from "react";
import Footer from "../components/Footer";
import ProjectData from "../components/ProjectData";
import { useLocation } from "react-router-dom"; // Import useLocation

import { useRef } from "react";

import './ProjectPage.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
function ProjectPage() {
    const section1Ref = useRef();

    const scrollToNextSection = (ref) => {
        if (ref.current) {
          const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
          };
          ref.current.scrollIntoView(scrollOptions);
        }
      };

    // Use useLocation to get the pathname
    const { pathname } = useLocation();
    const parts = pathname.split('/');
    const project_name = parts[parts.length - 1]; 
    
    const project = ProjectData.find((project) => project.name === project_name);

    if (!project) {
        // Handle the case where the project is not found
        return <div className='Error'><p>Project not found</p></div>;
    }
    return (
        <div className="ProjectPage">
        <div className={`background-color ${project.background}`} >
            <div className='left-cover'>
            <div>
                <img className='logo' src={project.logo} alt='logo'></img>
            </div>
            <div className='project-desc'>
                <p className='bold'>Role</p>
                <p>{project.role}</p>
                <hr className="solid"></hr>
                <p className='bold'>Duration</p>
                <p>{project.duration}</p>
                <hr className="solid"></hr>
                <p className='bold'>Tools</p>
                <p>{project.tools}</p>
                <hr className="solid"></hr>
                <p className='bold'>Team</p>
                <p>{project.team}</p>
            </div>
            </div>
            <div className='right-cover'>
            <img className='big-logo' src={project.big_logo} alt='big-logo'></img>
            <button className='code-button'><a target='_blank' rel="noreferrer" href={project.code}>View Code</a></button>
            </div>
            <button onClick={() => scrollToNextSection(section1Ref)} id='s1' className='scroll-down-button'><FontAwesomeIcon icon={faArrowDown} /></button>
            </div>
        <div className='title-section' ref={section1Ref}>
            <div className='left-title'>
            <h1>{project.title}</h1>
            <h2>{project.secondary_title}</h2>
            </div>
            <div className='right-desc'>
            <h3>{project.description}</h3>
            <p>{project.secondary_description}</p>
            </div>
        </div>
        <div className='photo-section'>
            <img className='photo-of-section' src={project.photo1} alt='nft photos'></img>
            <img className='photo-of-section' src={project.photo2} alt='nft photos'></img>
            <img className='photo-of-section' src={project.photo3} alt='nft photos'></img>
        </div>
        <div className='desc-section'>
            <div className='section'>
            <div className='main-heading'>
                <h1>Context&nbsp;&nbsp;&nbsp;&nbsp;</h1>
            </div>
            <div className='desc-right'>
                <h2>📋  Overview</h2>
                <p>{project.overview} </p>
                <h2>👩‍💻  Stakeholders</h2>
                <p>{project.stakeholder}</p>
            </div>
            </div>
        </div>
        <div className='desc-section'>
            <div className='section'>
            <div className='main-heading'>
                <h1>Challenge</h1>
            </div>
            <div className='desc-right'>
                <h2>📈 Data Collection</h2>
                <p>{project.data}</p>
                <h2>🗂️ Data Cleaning</h2>
                <p>{project.data_cleaning}</p>
                <h2>🧨 Modelling</h2>
                <p>{project.modelling}</p>
            </div>
            </div>
        </div>
        <div className='desc-section'>
            <div className='section'>
            <div className='main-heading'>
                <h1>Outcome&nbsp;</h1>
            </div>
            <div className='desc-right'>
                <h2>🤞 Key Points</h2>
                <p>{project.key_points}</p>
                <h2>🔮 Future Steps</h2>
                <p>{project.next_steps}</p>
            </div>
            </div>
            <div className='button-container'>
            <button className='code-button'><a target='_blank' rel="noreferrer" href={project.code}>View Code</a></button>
            </div>
        </div>
        <div className='footer'>
            <Footer styling={'free'}/>
        </div>
        </div>
    );
}

export default ProjectPage;
