import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./Travel.css";
import { Carousel } from 'react-responsive-carousel';
import TJImg1 from "../../images/TJ1.png";
import TJImg2 from "../../images/TJ2.png";
import TJImg3 from "../../images/TJ3.png";
import TJImg4 from "../../images/TJ4.png";
import TJImg5 from "../../images/TJ5.png";
import { AiFillHtml5, AiOutlineArrowLeft } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb} from "react-icons/bi";
import { SiExpress } from "react-icons/si"

function Travel() {
  return (
	<div className='Travel'>
     <a href="/"><AiOutlineArrowLeft />Back</a>
         <h2>Travel Journal</h2> 
     <Carousel>
        
                <div>
                    <img src={TJImg2} alt="moneywise website"/>
                </div>
                <div>
                    <img src={TJImg1} alt="moneywise website"/>
                </div>
                <div>
                    <img src={TJImg3} alt="moneywise website"/>
                </div>
                <div>
                    <img src={TJImg4} alt="moneywise website"/>
                </div>
                <div>
                    <img src={TJImg5} alt="moneywise website"/>
                </div>
      </Carousel>
      <div className='project-container'>
        <h4>About this project</h4>
        <p>MoneyWise is a full stack CRUD financial webapplication, made from scratch by by Code of Duty (my Team and I).
 	    Ryan and Kay were in charge of GitHub managment and backend structure, while Callum and I were the frontend expert, responsivness included, for this project.<br/>
</p>

        <h4>Technology Used</h4>
        <div className='logos'>
            <p><AiFillHtml5 /></p>
            <p><BiLogoCss3/></p>
            <p><BiLogoJavascript /></p>
            <p><SiExpress /></p> 
            <p><BiLogoMongodb /></p>
        </div>

        <h4>Challenges</h4>
        <p>It was crucial that our communication was adequate to avoid merging problem on github. Other than the merging problem all went pretty well as we were compliting each others work. As our backend team was shaping the functionality of the website Callum and I had to foollow up on every pages made, keep the website design parallel with all the pages, to make it responsive and we added a black mode theme to it.
            Our collaboration was our success for this website. </p>

      </div>
  </div>
  )
}

export default Travel