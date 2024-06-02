import React from "react";
// import { useMediaQuery } from "react-responsive";

const Themes = (props) => {
	const colors = ["#C63D2F", "#704264", "#FF9843", "#A8B94E", "#EF8F6B", "#8ECDDD"]; // Define colors array

	return (
		<>
			<div className="container d-flex d-md-inline d-lg-flex align-items-center">
				<div
					className="w-md-100 w-sm-50 md-center d-xs-inline d-lg-flex"
					style={{ fontSize: "1rem" }}>
					Select a Theme:
				</div>
				<div className="d-lg-flex justify-content-between align-items-center md-center w-sm-50 w-md-100">
					{colors.map((color) => (
						<div
							key={color} // Add a unique key for each element
							style={{
								width: "42px",
								height: "42px",
								margin: "10px",
								padding: "0px",
								display: "inline-block",
								borderRadius: "10px",
								cursor: "pointer",
								backgroundColor: color, // Use the color value directly
							}}
							onClick={() => props.handleTheme(color)} // Pass the color to the handler
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Themes;
