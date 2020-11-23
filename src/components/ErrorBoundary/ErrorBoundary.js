import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			errorFound: false,
			errorLog: "",
		};
	}

	componentDidCatch = (error, info) => {
		this.setState({
			errorFound: true,
			errorLog: error,
		});
	};

	render() {
		if (this.state.errorFound) {
			return (
				<div>
					<h2>Something Went Wrong</h2>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
