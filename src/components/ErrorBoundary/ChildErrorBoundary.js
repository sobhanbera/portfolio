import React, { Component } from "react";

class ChildErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			errorFound: false,
			errorLog: "",
			errorInfo: "",
		};
	}

	componentDidCatch = (error, info) => {
		this.setState({
			errorFound: true,
			errorLog: error,
			errorInfo: info,
		});
	};

	render() {
		if (this.state.errorFound) {
			return (
				<div>
					<h1>Error Found</h1>
					<p>Reloading page may fix this.</p>
					<p>Error Info: {this.state.errorInfo}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ChildErrorBoundary;
