import React from 'react';
import Hero from '../../components/Hero/Hero';
import BannerTop from '../../components/BannerTop/BannerTop';
import BannerMiddle from '../../components/BannerMiddle/BannerMiddle';
import ProjectsCards from '../../components/ProjectsCards/ProjectsCards';
import Certifications from '../../components/Certifications/Certifications';
import BannerBottom from '../../components/BannerBottom/BannerBottom';
import Contact from '../../components/Contact/Contact';


function Home(handleClickAbout, handleClickProjects, handleClickCertificates, handleClickContact) {
  return (
	<div>
		<Hero handleClickAbout={handleClickAbout}/>
		<BannerTop quote="“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler"/>
		<ProjectsCards handleClickProjects={handleClickProjects}/>
		<BannerMiddle quote="“You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.”- John Romero"/>
		<Certifications handleClickCertificates={handleClickCertificates}/>
		<BannerBottom quote="“Code is like humor. When you have to explain it, it’s bad.” – Cory House" />
		<Contact handleClickContact={handleClickContact}/>
	</div>
  )
}

export default Home;