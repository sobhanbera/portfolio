import React, { Component, useEffect } from "react";
import "./MainComponent.css";

import ChildErrorBoundary from "./ErrorBoundary/ChildErrorBoundary";
import Header from "./header/Header";
import MainSection from "./mainSection/MainSection";
import SkillSection from "./skill/SkillSection";
import Marquee from "./elements/marquee/Marquee";
import Contact from "./contact/Contact";
import Cursor from "./cursor/Cursor";
class Main extends Component {
	constructor() {
		super();
		this.state = {
			lightTheme: true,
			theme: "light",
		};
		this.changeTheme = this.changeTheme.bind(this); //no need of this line but since i don't want to forget this so i wrote
	}

	changeTheme = () => {
		this.setState((prev) => {
			const body = document.body;
			if (prev.theme === "light") {
				body.style.backgroundColor = "var(--darkmslight)";
			} else {
				body.style.backgroundColor = "#f8e9a1";
			}
			return {
				lightTheme: !prev.lightTheme,
				theme: prev.theme === "light" ? "dark" : "light",
			};
		});
	};

	render() {
		return (
			<ChildErrorBoundary>
				<div className={`hereisthemain-${this.state.theme}`}>
					<Header
						isLightEnable={this.state.lightTheme}
						changeTheme={this.changeTheme}
					/>
					<MainSection theme={this.state.theme} />
					<SkillSection theme={this.state.theme} />

					<Marquee
						color='orange'
						theme={this.state.theme}
						extraClass=''
					/>
					<Marquee
						color='yellow'
						theme={this.state.theme}
						extraClass='reverse'
					/>
					<Marquee
						color='green'
						theme={this.state.theme}
						extraClass='fast'
					/>
					<Marquee
						color='blue'
						theme={this.state.theme}
						extraClass='reverse-slow'
					/>
					<Contact theme={this.state.theme} />

					<Cursor theme={this.state.theme} />
				</div>
			</ChildErrorBoundary>
		);
	}
}

export default Main;
