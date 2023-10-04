import React from 'react';
import "./Certifications.css";
import CertificationGA from "../../images/certificate.png";

function Certifications() {
  return (
	<div className='Certifications'>
		<h2>🎉 Certifications 🎉</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsam, voluptatem neque natus cumque quisquam libero dolor ullam iusto, maxime quae est.</p>
		<img src={CertificationGA} alt="GA Certification"/>
		<p>And more certificate coming soon...</p>
	</div>
  );
}

export default Certifications;