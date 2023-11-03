import React from "react";

import './ProjectCard.css'

const ProjectCard = (props) => {

        return (
          <div className="projectcard-container">
              <div className='projectcard-image' style={{ backgroundImage: `url(${props.backgroundImg})` }}></div>
            <div className='projectcard-lower'>
                <h3 className='projectcard-title'>{props.title}</h3>
                <p className='projectcard-text'>{props.text}</p>
                <p className='projectcard-text bold'>Role:</p>
                <div class='role-container'>
                {props.roles.map((role) => (
                  <p key={role} class='projectcard-role'>{role}</p>
                ))}   
                </div>  
                <a className='projectcard-link' href={props.link} target="_blank" rel="noopener noreferrer">
                    <p className='projectcard-linktext'>Find out more</p>
                </a>
            </div>
          </div>
        );
      }

export default ProjectCard;