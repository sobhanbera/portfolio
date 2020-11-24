import React from "react";
import "./ErrorPopUp.css";

const ErrorPopUp = (props) => {
	return (
		<div className='error-pop-up'>
			<div className='absolute-error'>
				<h3>{props.head}</h3>
				<p>{props.errorDetail}</p>
				<svg data-name='Layer 1' viewBox='0 0 64 64'>
					<line
						x1='9.37'
						x2='54.63'
						y1='9.37'
						y2='54.63'
						fill='none'
						stroke='#010101'
						stroke-miterlimit='10'
						stroke-width='4'
					/>
					<line
						x1='9.37'
						x2='54.63'
						y1='54.63'
						y2='9.37'
						fill='none'
						stroke='#010101'
						stroke-miterlimit='10'
						stroke-width='4'
					/>
				</svg>
			</div>
		</div>
	);
};

export default ErrorPopUp;
