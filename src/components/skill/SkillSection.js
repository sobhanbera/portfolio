import React from "react";
import "./SkillSection.css";

import {
	AndroidCard,
	WebCard,
	PythonCard,
	JavaCard,
	CompetitivePCard,
} from "./SkillsFlipper/SkillsFlipper";

const About = (props) => {
	// backText='I am a web developer from an year. I have created many web application using Javascript, HTML, CSS, Sass, Bootstrap, ReactJS framework, Firebase, APIs, etc.'>
	return (
		<div id='skills' className={`main-about ${props.theme}`}>
			<div className='about-card-holder'>
				<div className='card-holder'>
					<AndroidCard />
					<div className='skill-scroll'>
						<div className='android-skill-level skill-level'>
							<div className='level-progress level-progress-android'></div>
						</div>
					</div>
				</div>
			</div>
			<div className='about-card-holder'>
				<div className='card-holder'>
					<WebCard />
					<div className='skill-scroll'>
						<div className='web-skill-level skill-level'>
							<div className='level-progress level-progress-web'></div>
						</div>
					</div>
				</div>
				<div className='card-holder'>
					<JavaCard />
					<div className='skill-scroll'>
						<div className='java-skill-level skill-level'>
							<div className='level-progress level-progress-java'></div>
						</div>
					</div>
				</div>
				<div className='card-holder'>
					<PythonCard />
					<div className='skill-scroll'>
						<div className='python-skill-level skill-level'>
							<div className='level-progress level-progress-python'></div>
						</div>
					</div>
				</div>
			</div>
			<div className='about-card-holder'>
				<div className='card-holder'>
					<CompetitivePCard />
					<div className='skill-scroll'>
						<div className='cp-skill-level skill-level'>
							<div className='level-progress level-progress-cp'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
