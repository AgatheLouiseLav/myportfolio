import React from 'react';
import "./Nasa.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NasaImg1 from "../../images/Supernova.png";
import NasaImg2 from "../../images/Nasa_img2.png";
import NasaImg3 from "../../images/Nasa_img5.png";
import NasaImg4 from "../../images/Nasa_img6.png";
import NasaImg5 from "../../images/Nasa_img7.png";
import NasaImg6 from "../../images/Nasa_img8.png";
import NasaImg7 from "../../images/Nasa_img9.png";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";

function Nasa() {
  return (
	<div className='Nasa'>
     <Carousel>
        
                <div>
                    <img src={NasaImg2} />
                </div>
                <div>
                    <img src={NasaImg1} />
                </div>
                <div>
                    <img src={NasaImg3} />
                </div>
                <div>
                    <img src={NasaImg4} />
                </div>
                <div>
                    <img src={NasaImg5} />
                </div>
                <div>
                    <img src={NasaImg6} />
                </div>
                <div>
                    <img src={NasaImg7} />
                </div>
      </Carousel>
      <div className='project-container'>
        <h2>NASA Library</h2>
        <h4>About this project</h4>
        <p>NASA Library is a solo project. It is a full-stack MERN (MongoDB, Express, React, Node.js) CRUD web app. There are three different APIs from the NASA Website and my own API for the CRUD functionality. Every user can create a personal account by signing up and logging in. This website serves as a small NASA library, presenting the following features on the homepage: APOD (Astronomical Picture Of the Day), data on asteroids close to Earth, Mars images from Curiosity, supernova data and images, and an observations page for making personal notes.</p>

        <h4>Technology Used</h4>
        <div><AiFillHtml5/> <BiLogoCss3/> <BiLogoJavascript /></div>

        <h4>Challenges</h4>
        <p>It was more difficult than I thought.I wasn't able to implement any of the IceBox features for my project. I was able to create my MVP, but as the week went by, I had to make the project a bit lighter to stay on track. The CRUD functionality was challenging, yet it was the best part of the project as I got to learn more about React. It also provided good practice with MongoDB, Mongoose, and Express.</p>


      </div>
  </div>
  )
}

export default Nasa