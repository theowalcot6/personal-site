import './Projects.css'
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

import Stuft from '../components/ProjectCardImages/Stuft.png'
import Looby from '../components/ProjectCardImages/Looby.png'
import Codeingo from '../components/ProjectCardImages/Codeingo.png'

import React from 'react' 

const Projects = () => {
    return (
        <>
            <div className='Projects'>
                <h6 className='Projects-header'>My Projects</h6>
                <div className='ProjectCard-container'>
                    <ProjectCard title='Stuft' text='Classical Education is inefficient. Studying becomes difficult and time-pressured. Stuft maximises your chance of A-A* grades in the smallest amount of time.' link='https://stuft.co.uk/' backgroundImg={Stuft} roles={['Founder', 'Software Developer']} />
                    <ProjectCard title='Looby' text='A Subscription as a Service that turns your Asana tickets into a Product roadmap that can be shared with key stakeholders in the customers business.' link='https://luuby.co.uk/' backgroundImg={Looby} roles={['Founder', 'Software Developer']}/>
                    <ProjectCard title='Orca Design' text='A digital agency that I work at as the Head of Development focussing on bespoke software development and digital strategy.' link='https://orcadesign.co.uk/' backgroundImg={Codeingo} roles={['Founder', 'Software Developer']}/>
                </div>
            </div>
            <Footer styling={'free'} />
        </>
    )
  };
   
  export default Projects;
