import React, {forwardRef} from 'react';
import "./Hero.css";
import ImagePortfolio from "../../images/My_Professional_Picture.jpg"

function Hero(handleClickAbout) {
  return (
	<div className='Hero' handleClickAbout={handleClickAbout}>
		<div className='hero-left'>
			<h1>✨ Agathe Lavigne ✨ </h1>
			<p>I am a passionate junior Software Engineer. My journey into technology started while working as a live-in carer, where I encountered applications improving individual care. Technology goes beyond caregiving; it opens doors to opportunities, enhances life quality, inspires creativity, and fosters continuous learning. I'm now part of the web developer community, looking forward to refine my skills in a dynamic company.</p>
		</div>
		<div className='hero-right'>
			<img src={ImagePortfolio} alt="Agathe Lavigne" />
			<div className='overlay'>
				<div className='text'>Here is the mastermind behind those amazing Frontend design.<br />🤯🤯🤯</div>
			</div>	
		</div>
	</div>
  )
}

export default forwardRef(Hero);