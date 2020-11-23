import React from "react";
import "./TextFlipper.css";
const TextFlipper = (props) => {
	return (
		<h4 className={`word-flipper ${props.theme} textFlipper`}>
			<span>I am </span>
			<div className='dark-cololo'>
				<ul className='flip5'>
					<li>Competitive Programmer.</li>
					<li>Android Developer.</li>
					<li>Web Developer.</li>
					<li>Quick Learner.</li>
					<li>Student.</li>
				</ul>
			</div>
		</h4>
	);
};

export default TextFlipper;
