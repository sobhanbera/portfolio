import React from "react";
import "./AboutSection.css";
// import MyImage from "../../assets/imgs/android.png";

const About = (props) => {
	return (
		<div id='about' className={`main-about ${props.theme}`}>
			<div className={`blur-background ${props.theme}`}>
				<div className='semi-card'>
					<h3>About Me!</h3>
					<p>
						Hello, Geeks! I am Sobhan Bera.{"\n"}I started coding in
						2018. Started game dev in the same year but I am not
						that interested in this field that's why I started
						Android development at 2018 with Java and Android Studio
						with awesome material designs (UI/UX). I started Web Dev
						in 2019 and currently enjoying this technology. I have
						created many web applications, android application with
						Javascript, HTML, CSS, Sass, Web APIs, ReactJS, and many
						more. I am currently a very experienced web developer. I
						also love to contribute to open source projects it's my
						secondary hobby. And I prefer VIM instead of Emacs and
						Tabs instead of Spaces 😂.
					</p>
					<h4>Technologies</h4>
					<ul>
						<li>Android Dev</li>
						<li>Web Dev</li>
					</ul>
					<h4>Languages</h4>
					<ul>
						<li>Java</li>
						<li>C++</li>
						<li>Python</li>
						<li>Javascript</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Sass</li>
					</ul>
					<h4>Frameworks</h4>
					<ul>
						<li>React JS</li>
					</ul>
					<h4>Tools</h4>
					<ul>
						<li>Git, GitHub</li>
						<li>VS Code</li>
						<li>Android Studio</li>
						<li>Firebase</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
