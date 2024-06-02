import React from "react";

const Alerts = (props) => {
	return (
		<div
			style={{
				paddingTop: "57px",
				height: "20px",
			}}>
			{props.alert && (
				<div className={`alert alert-${props.alert.type}`} role="alert">
					{props.alert.msg}
				</div>
			)}
		</div>
	);
};

export default Alerts;
