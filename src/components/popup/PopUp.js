import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const PopUp = () => {
	return (
		<Popup trigger={<button> Trigger</button>} position='right center'>
			<div>
				<h1>Sorry</h1>
				<p>Main Content Goes Here</p>
			</div>
		</Popup>
	);
};

export default PopUp;
