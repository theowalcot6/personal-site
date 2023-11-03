import React from "react";

import './Footer.css'

function Footer({styling}) {
    return (
      <div class={`footer-container ${styling}`}>
        <div class='whole-footer'>
          <div class='footer-heading'>
            <h6 class='footer-welcome'>Thanks for stopping by, let's chat! 👋</h6>
          </div>
          <div class='footer-lower'>
            <div class='lower-grouped'>
              <div class='lower-top'>CONTACT ME 💌</div>
              <div class='lower-lower'><a class='lower-lower' href='mailto:me@theowalcot.com'>me@theowalcot.com</a></div>
            </div>
            <div class='lower-grouped'>
              <div class='lower-top'>LET'S CONNECT 🤝</div>
              <div class='lower-lower'><a class='lower-lower' href='https://www.linkedin.com/in/theowalcot/' target='_blank' rel="noreferrer">Linkedin</a> | <a class='lower-lower' href={require("../static/Theo_Walcot_CV.pdf")} download="Theo's CV">Resume</a> | <a class='lower-lower' href='/work'>Work</a> | <a class='lower-lower' href='https://github.com/theowalcot6' target='_blank' rel="noreferrer">Github</a> | <a class='lower-lower' href='https://www.kaggle.com/theowalcot' target='_blank' rel="noreferrer">Kaggle</a></div>
            </div>
            <div class='lower-grouped'>
              <div class='lower-top'>@2023 THEO WALCOT</div>
              <div class='lower-lower'>Made with 💛 & 🍵</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Footer;