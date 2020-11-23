import React, { useState, useEffect } from "react";
import "./CodingCard.css";

const CodingCard = (props) => {
	const colors = [
		"#DC143C",
		"#FF4500",
		"#FFA500",
		"#32CD32",
		"#4169E1",
		"#243079",
	];
	// const logColor = ["#ef5050", "#5050ef", "#50ef50"];
	const logColor = ["#8f8f8f", "#afafaf", "#dfdfdf"];
	// const width = ["30px", "50px", "70px", "100px", "80px", "45px"];
	const width = ["30px", "45px", "60px", "75px"];
	const fileNames = [
		"HelloWorld",
		"Graph",
		"DP",
		"Tree",
		"BST",
		"TwoSum",
		"ThreeSum",
		"MergeSort",
		"BubbleSort",
		"QuickSort",
	];
	const [changed, setChange] = useState(true);

	useEffect(() => {
		colors.slice();
		fileNames.slice();
	}, [changed]);

	const changeChanged = () => {
		let temp = changed;
		setChange(!temp);
	};

	return (
		<div className={`coding-card ${props.theme}`}>
			<div className='coding-card-header'>
				<h2>
					{fileNames[Math.floor(Math.random() * fileNames.length)]}
				</h2>
				<button onClick={changeChanged}>{"Compile & Run"}</button>
			</div>
			<div className='coding-card-main'>
				<div className='code11 coding-lines coding-line1'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line2'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code4'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line3'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code4'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line4'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code4'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line5'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code4'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line6'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line7'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='coding-lines coding-line8'>
					<div
						className='code line1-code1'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code2'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code3'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code4'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
					<div
						className='code line1-code5'
						style={{
							backgroundColor:
								colors[
									Math.floor(Math.random() * colors.length)
								],
							width:
								width[Math.floor(Math.random() * width.length)],
						}}></div>
				</div>
				<div className='code-log'>
					<div className='code-output'>Code Output</div>
					<div className='code11 coding-lines coding-line1'>
						<div
							className='code line1-code2'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
						<div
							className='code line1-code3'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
					</div>
					<div className='coding-lines coding-line2'>
						<div
							className='code line1-code1'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
						<div
							className='code line1-code2'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
						<div
							className='code line1-code3'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
						<div
							className='code line1-code4'
							style={{
								backgroundColor:
									logColor[
										Math.floor(
											Math.random() * logColor.length
										)
									],
								width:
									width[
										Math.floor(Math.random() * width.length)
									],
							}}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodingCard;
