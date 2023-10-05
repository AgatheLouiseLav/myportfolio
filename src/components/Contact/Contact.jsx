import React from 'react';
import "./Contact.css";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub  } from 'react-icons/ai';

function Contact() {
  return (
	<div className='Contact'>
		<h1>🤙 Contact 🤙</h1>
		<form>
			<label>Name:</label>
			<input />
			<label>Email:</label>
			<input />
			<label>Message:</label>
			<textarea />
			<button>Submit</button>
		</form>
		<div className='logo'>
			<a href='https://www.linkedin.com/in/agathe-lavigne-65329916a/'><AiFillLinkedin /></a>
			<a href='https://github.com/AgatheLouiseLav'><AiFillGithub /></a>
		</div>
	</div>
  )
};

export default Contact;