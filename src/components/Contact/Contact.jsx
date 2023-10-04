import React from 'react';
import "./Contact.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub  } from 'react-icons/ai';

function Contact() {
  return (
	<div className='Contact'>
		<h1>🤙 Contact 🤙</h1>
		<p><AiOutlineMail />Email: gotgini@gmail.com </p>
		<p><AiFillLinkedin />LinkedIn: agathe-lavigne-65329916a </p>
		<p><AiFillGithub />Github: AgatheLouiseLav </p>
	</div>
  )
};

export default Contact;