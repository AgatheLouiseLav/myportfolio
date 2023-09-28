import React from 'react';
import "./ProjectsCards.css";
import Supernova from "../../images/Supernova.png";
import MoneyWise from "../../images/MoneyWise_White.png";
import TravelJournal from "../../images/TravelJournal_PF.png";
import Mastermind from "../../images/Mastermind_PF.png";

function ProjectsCards() {
  return (
	<div className='ProjectsCards'>
    <h2>My Projects...🎆 (so far)</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eos nemo est quo expedita maiores tempora aspernatur omnis accusantium ipsa.</p>
    <div className='cards-container'>
      <div><img src={Supernova} /></div>
      <div><img src={MoneyWise} /></div>
      <div><img src={TravelJournal} /></div>
      <div><img src={Mastermind} /></div>
    </div>
  </div>
  )
}

export default ProjectsCards