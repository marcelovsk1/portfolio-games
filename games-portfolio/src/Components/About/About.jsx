import React from 'react'
import './About.css'
import About_Pic from '../../../src/img/about_pic.png'
import le_wagon from '../../../src/img/le_wagon.png'
import unity_logo from '../../img/unity_logo.png'

const About = () => {
  return (
    <div class="container-wrapper">
      <section class='styles_container' id='about'>
        <h2 class='styles_title'>About <span>Me</span></h2>
        <div class='styles_content'>
          <div class="pic_container">
            <img src={About_Pic} alt="About_Pic" class='About-Pic' />
            <ul class='styles_itens'>
              <li class='education'>
                <div class='webdev'>
                  <div class='description'>
                    <h3>Web-Developer</h3>
                    <p>Full Stack Web Developer graduated from <span>Le Wagon Montreal.</span> With a solid foundation in both front-end and back-end technologies, I am dedicated to crafting impactful and functional digital experiences.</p>
                  </div>
                </div>
                <a href="https://www.lewagon.com">
                  <img src={le_wagon} alt="Le Wagon" class='le_wagon' />
                </a>
              </li>
              <li class='education'>
                <div class="webdev">
                  <div class="description-2">
                    <h3>Game Developer</h3>
                    <p>Following my bootcamp graduation, I delved into <spam className="ios-span">iOS development</spam>, honing my skills and specializing in crafting seamless experiences for Apple's ecosystem.</p>
                  </div>
                </div>
                <a href="https://unity.com/">
                  <img src={unity_logo} alt="iOS" class='iOS' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About
