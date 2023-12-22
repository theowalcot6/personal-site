import React from "react";
import { Link } from "react-router-dom";


import './Footer.css'
import PropTypes from 'prop-types'; // Import PropTypes

function Footer({styling}) {
    return (
      <div className={`footer-container ${styling}`}>
        <div className='whole-footer'>
          <div className='footer-heading'>
            <h6 className='footer-welcome'>Thanks for stopping by, let&apos;s chat! 👋</h6>
          </div>
          <div className='footer-lower'>
            <div className='lower-grouped'>
              <div className='lower-top'>CONTACT ME 💌</div>
              <div className='lower-lower'><a className='lower-lower' href='mailto:me@theowalcot.com'>me@theowalcot.com</a></div>
            </div>
            <div className='lower-grouped'>
              <div className='lower-top'>LET&apos;S CONNECT 🤝</div>
              <div className='lower-lower'><a className='lower-lower' href='https://www.linkedin.com/in/theowalcot/' target='_blank' rel="noreferrer">Linkedin</a> | <a className='lower-lower' href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV">Resume</a> | <Link className='lower-lower' href='/work'>Work</Link> | <a className='lower-lower' href='https://github.com/theowalcot6' target='_blank' rel="noreferrer">Github</a> | <a className='lower-lower' href='https://www.kaggle.com/theowalcot' target='_blank' rel="noreferrer">Kaggle</a></div>
            </div>
            <div className='lower-grouped'>
              <div className='lower-top'>@2023 THEO WALCOT</div>
              <div className='lower-lower'>Made with 💛 & 🍵</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

Footer.propTypes = {
    styling: PropTypes.string, // Assuming that "styling" is a string prop
  };

export default Footer;
