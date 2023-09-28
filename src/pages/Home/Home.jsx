import React from 'react'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import ProjectsCards from '../../components/ProjectsCards/ProjectsCards'

function Home() {
  return (
	<div>
		<Hero />
		<Banner />
		<ProjectsCards/>
	</div>
  )
}

export default Home