import React from 'react';
import "./Mastermind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import MImg1 from "../../images/M1.png";
import MImg2 from "../../images/M2.png";
import MImg3 from "../../images/M3.png";
import { AiFillHtml5, AiOutlineArrowLeft, AiFillGithub } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript} from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";


function Mastermind() {
  return (
	<div className='Mastermind'>
    <a href="/"><AiOutlineArrowLeft />Back</a>
         <h2>Mastermind Game</h2> 
     <Carousel>
                <div>
                    <img src={MImg1} alt="mastermind game"/>
                </div>
                <div>
                    <img src={MImg2} alt="mastermind game"/>
                </div>
                <div>
                    <img src={MImg3} alt="mastermind game"/>
                </div>
      </Carousel>
      <div className='project-container'>
        <h4>About this project</h4>
        <p>This is a solo project, and first of many others to come. My approach was to begin with making the wireframe of the Game, as I was already familiar with it, the UI was rather clear in my mind and easy to make. The steps of the functionality were clear as well.</p>
        <div className='links'>
            <a href=''><AiFillGithub /></a>
            <a href=''><CgWebsite/></a>
        </div>

        <h4>Challenges</h4>
        <p>Displaying the player choices was difficult at first, and so the feedbacks. I also had a problem with a click which was going in the air. Jest was installed for this project,I wanted to use it to test my code but realised I need to learn more about it to use it correctly. I have done my best to make the code readable and DRY. This project was a great learning opportunity for me, I was able to put all I've learned into practice. I am still learning from my mistakes, but enjoying every moment of it.</p>

        <h4>Technology Used</h4>
        <div className='logos'>
            <p><AiFillHtml5 /></p>
            <p><BiLogoCss3/></p>
            <p><BiLogoJavascript /></p>
        </div>
      </div>
  </div>
  )
}

export default Mastermind