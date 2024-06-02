import React from "react";
import Carousel from "./Carousel";
import Themes from "./Themes";
import Country from "./Country";

const Elements = (props) => {
	return (
		<div className="container m-lg-5 px-4">
			<div className="row">
				<div className="col-md-7 p-0 mb-4 pe-md-3">
					<Carousel />
				</div>
				<div
					className="col-md-5 d-flex align-items-center p-4"
					style={{ backgroundColor: "white", border: "1px solid #0000042b", borderRadius: "7px" }}>
					<div className="w-100">
						<Themes handleTheme={props.handleTheme} />
						<Country handleCountryChange={props.handleCountryChange} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Elements;
