import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = (props) => {
	return (
		<div className={`cursorBlob ${props.theme}`}>
			<div className='cursor-wrap'></div>
		</div>
	);
};

export default Cursor;
