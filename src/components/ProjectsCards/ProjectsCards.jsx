import React from 'react';
import "./ProjectsCards.css";
import Supernova from "../../images/Supernova.png";
import MoneyWise from "../../images/MoneyWise_White.png";
import TravelJournal from "../../images/TravelJournal_PF.png";
import Mastermind from "../../images/Mastermind_PF.png";
import { Link } from 'react-router-dom';

function ProjectsCards() {
  return (
	<div className='ProjectsCards'>
    <h2>🎇 My Projects 🎇</h2>
    <p>All those projects have been made from scratch within a week time each. Three of them are solo projects, only Moneywise is a Team project. They've all been done as I was a student of General Assembly from June 2023 to September 2023.</p>
    <div className='cards-container'>
     <Link to="/nasawebsite">
      <div className='card'>
        <img src={Supernova} alt='nasa website'/>
      </div>
      </Link> 
     <Link to="/moneywise">
      <div className='card'>
        <img src={MoneyWise} alt='moneywise website'/>
      </div>
      </Link> 
     <Link to="/traveljournal">
      <div className='card'>
        <img src={TravelJournal} alt='travel journal website'/>
        </div>
      </Link>
     <Link to="/mastermind">
      <div className='card'>
        <img src={Mastermind} alt='mastermind website'/>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default ProjectsCards