import React from "react";

import './ProjectCard.css'
import PropTypes from 'prop-types'; // Import PropTypes


const ProjectCard = ({title,text,backgroundImg,link, roles}) => {

        return (
          <div className="projectcard-container">
              <div className='projectcard-image' style={{ backgroundImage: `url(${backgroundImg})` }}></div>
            <div className='projectcard-lower'>
                <h3 className='projectcard-title'>{title}</h3>
                <p className='projectcard-text'>{text}</p>
                <p className='projectcard-text bold'>Role:</p>
                <div className='role-container'>
                {roles.map((role) => (
                  <p key={role} className='projectcard-role'>{role}</p>
                ))}   
                </div>  
                <a className='projectcard-link' href={link} target="_blank" rel="noopener noreferrer">
                    <p className='projectcard-linktext'>Find out more</p>
                </a>
            </div>
          </div>
        );
      }

ProjectCard.propTypes = {
  backgroundImg: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  roles: PropTypes.array
};

export default ProjectCard;