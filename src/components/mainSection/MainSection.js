import React from "react";
import TextFlipper from "../elements/TextFlipper";
import CodingCard from "./Cards/CodingCard";
import "./MainSection.css";

const MainSection = (props) => {
	const showResume = () => {
		console.clear();
		console.group("resume not available currently. Thanks for visiting.");
		setTimeout(() => {
			alert(
				"Sorry currenlty resume is not available. As soon as I complete that I will upload it here."
			);
			console.group("Thanks for visiting. Explore The Website");
		}, 500);
	};
	return (
		<div className={`main-home ${props.theme}`}>
			<div className='main-home-section'>
				<h2>Hi, Geeks. I am Sobhan Bera.</h2>
				<TextFlipper theme={props.theme} />
				<p>
					Welcome to this website. This website is portfolio of mine
					Here you can know about me in breif Scroll Up To know more
					about me.
				</p>
				<div>
					<button onClick={showResume}>Resume</button>
				</div>
			</div>
			<CodingCard theme={props.theme} />
		</div>
	);
};

export default MainSection;
