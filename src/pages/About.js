import React from "react";
import profile from '../static/Profile.png'
import holiday from '../static/site2.jpeg'

import Footer from "../components/Footer";
import './About.css'

function About() {
    return (
      <>
      <div class='about-container'>
        <div class='about-1st'>
            <img class='about-img' src={profile} alt="Profile" width="160" height="160"></img>
            <h6 class='a-little'>A LITTLE ABOUT ME</h6>
            <h6 class='hi'>Hi, I'm Theo!</h6>
            <p class='aboutme'>I'm a Senior Product Manager at E.ON Next on the Retention team, leading the strategy and focussing on shipping high value features across our Web and App. I graduated from The University of Bristol in 2017 where I majored in Mathematics with a focus on practical Artificial Intelligence. I'm from Teddington, London where I grew up spending almost all my time playing football. From 6 to 16 years old, I played for Brentford Football Academy before going on to play for my 1st XI team at University. At University, I studied a range of complex courses focussing on emerging technology. I studied several Deep Learning Neural Network architectures including CNNs, GANs and Transformers as well the application of Advanced Reinforcement Learning methods. This sparked an interest in new technologies that I haven't been able to shake going into my career. Nowadays, I spend my time between my work where I focus on shipping products fast and my hobbies which is pretty much anything technology or football related. At work, I have a particular focus on features that have an AI or data element to deliver value to our customers. I also work on data science and machine learning projects as my side hustle and so I never stop learning what's out there, which I've been doing for almost 8 years now.</p>
            <p class='aboutme'>Other than that, I enjoy other creative outlets such as getting my hands dirty with paint and clay for arts and crafts, taking photos, playing songs I love on the piano, or getting bruises from learning skateboard tricks. I love outdoor activities such as snowboarding, hiking, and beach volleyball</p>
            <h6 class='a-little'>EXPERIENCE</h6>
            <p class='experience-header'>Senior Product Manager @ E.ON Next</p>
            <p class='experience-title'>Feb 2022 - Present </p>
            <p class='experience-header'>Lead Product Manager @ Lolly.com</p>
            <p class='experience-title'>June 2020 - Feb 2022 </p>
            <p class='experience-header'>Technology Management Consulting @ E&Y</p>
            <p class='experience-title'>July 2017 - June 2020 </p>
            <a class='download-cv' href={require("//components/Theo_Walcot_CV.pdf")} download="Theo's CV">Download full resume here ↓</a>
        </div>
        <div class='about-2nd'>
            <h6 class='a-little'>MY VALUES</h6>
            <h5 class='value-header'>💛  Passion is everything.</h5>
            <h5 class='value'>I found that because I enjoy what I do, I have the drive and initiative to pour my heart into the things I believe in. I push for boundless creativity and to join other passionate people to make the world a happier place.</h5>
            <h5 class='value-header'>📒  Never stop learning.</h5>
            <h5 class='value'>I am always seeking challenges to continually develop myself, such as participating in competitions, collaborating on projects, reading blogs, and involving myself in the design community where I learn from others and also give back through mentorship and sharing my experiences and skills.</h5>
            <h5 class='value-header'>✊  Embrace the journey.</h5>
            <h5 class='value'>Embrace the learning curves and failures and discomfort. Open your mind and let curiosity and optimism drive you. Believe in yourself, and also have fun along the way.</h5>
            <h5 class='value-header'>😊  Be human.</h5>
            <h5 class='value'>Empathy and kindness go a long way. Share our knowledge and take time to understand different perspectives. Build towards a culture of inclusion and respect, and stay true to yourself and to others.</h5>
            <img class='img' src={holiday} alt='holiday'/>
        </div>
    </div>
    <Footer styling={'free'}/>
    </>
    );
  }

export default About;
