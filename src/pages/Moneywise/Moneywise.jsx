import React from 'react';
import "./Moneywise.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MWImg1 from "../../images/MW1.png";
import MWImg2 from "../../images/MW22.png";
import MWImg3 from "../../images/MW3.png";
import MWImg4 from "../../images/MW4.png";
import MWImg5 from "../../images/MW5.png";
import MWImg6 from "../../images/MW8.png";
import MWImg7 from "../../images/MW7.png";
import MWImg8 from "../../images/MW9.png";
import MWImg9 from "../../images/MW10.png";
import MWImg10 from "../../images/MW11.png";
import { AiFillHtml5, AiOutlineArrowLeft, AiFillGithub } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoDjango, BiLogoPython, BiLogoBootstrap} from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

function Moneywise() {
  return (
	<div className='MW'>
        <a href="/"><AiOutlineArrowLeft />Back</a>
         <h2>MoneyWise</h2> 
     <Carousel>
        
                <div>
                    <img src={MWImg2} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg1} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg3} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg4} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg5} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg6} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg7} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg8} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg9} alt="moneywise website"/>
                </div>
                <div>
                    <img src={MWImg10} alt="moneywise website"/>
                </div>
      </Carousel>
      <div className='project-container'>
        <h4>About this project</h4>
        <p>MoneyWise is a full stack CRUD financial webapplication, made from scratch by by Code of Duty (my Team and I).
 	    Ryan and Kay were in charge of GitHub managment and backend structure, while Callum and I were the frontend expert, responsivness included, for this project.<br/>
</p>    
        <div className='links'>
            <a href=''><AiFillGithub /></a>
            <a href=''><CgWebsite/></a>
        </div>


        <h4>Challenges</h4>
        <p>It was crucial that our communication was adequate to avoid merging problem on github. Globaly all went pretty well as we were completing each others work. As our backend team was shaping the functionality of the website Callum and I had to foollow up on every pages made, keep the website design parallel with all the pages, to make it responsive and we added a black mode theme to it.
            Our collaboration was our success for this website. </p>


        <h4>Technology Used</h4>
        <div className='logos'>
            <p><AiFillHtml5 /></p>
            <p><BiLogoCss3/></p>
            <p><BiLogoBootstrap /></p>
            <p><BiLogoJavascript /></p>
            <p><BiLogoDjango /></p> 
            <p><BiLogoPython /></p>
            <p><DiPostgresql /></p>
            <p><TbApi /></p>
        </div>

      </div>
  </div>
  )
}

export default Moneywise