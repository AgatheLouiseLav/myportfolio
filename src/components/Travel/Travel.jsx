import React from 'react';
import "./Travel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import TJImg1 from "../../images/TJ1.png";
import TJImg2 from "../../images/TJ2.png";
import TJImg3 from "../../images/TJ3.png";
import TJImg4 from "../../images/TJ4.png";
import TJImg5 from "../../images/TJ5.png";
import { AiFillHtml5, AiOutlineArrowLeft } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb} from "react-icons/bi";
import { SiExpress, SiMongoose } from "react-icons/si"

function Travel() {
  return (
	<div className='Travel'>
     <a href="/"><AiOutlineArrowLeft />Back</a>
         <h2>Travel Journal</h2> 
     <Carousel>
        
                <div>
                    <img src={TJImg2} alt="Travel Journal website"/>
                </div>
                <div>
                    <img src={TJImg1} alt="Travel Journal website"/>
                </div>
                <div>
                    <img src={TJImg3} alt="Travel Journal website"/>
                </div>
                <div>
                    <img src={TJImg4} alt="Travel Journal website"/>
                </div>
                <div>
                    <img src={TJImg5} alt="Travel Journal website"/>
                </div>
      </Carousel>
      <div className='project-container'>
        <h4>About this project</h4>
        <p>TravelJournal is a full stack solo project. This app consists of keeping travel souvenirs safe and light in your pocket. I began this creation by doing the wireframe, then the ERD followed by my pseudocode and finally applied all those pre-work into practice.</p>

        <h4>Technology Used</h4>
        <div className='logos'>
            <p><AiFillHtml5 /></p>
            <p><BiLogoCss3/></p>
            <p><BiLogoJavascript /></p>
            <p><SiExpress /></p> 
            <p><SiMongoose /></p>
            <p><BiLogoMongodb /></p>
        </div>

        <h4>Challenges</h4>
        <p>The whole project was a challenge, but I really enjoyed it as it built up confidence in my new skills. The update and delete controllers were the most difficult. I also decided to use reference data in mongoDB so I could practise it more and get more familiar with it. Making a website responsive is always more difficult than I thought but if I had more time for this project the responsiveness would be spot on. </p>

      </div>
  </div>
  )
}

export default Travel