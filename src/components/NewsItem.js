import React from "react";
import NoImgNugget from "./NoImgNugget.png";

const NewsItem = (props) => {
	let { title, description, imageUrl, newsUrl, author, date } = props;
	return (
		<div className="card my-3 pb-0" style={{ width: "100%", height: "500px", maxHeight: "500px" }}>
			<img
				src={imageUrl ? imageUrl : NoImgNugget}
				className="card-img-top img-fluid"
				style={{ height: "250px", objectFit: "cover", background: "white" }}
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{title ? title.slice(0, 65) : ""}...</h5>
				<p className="card-text">{description ? description.slice(0, 85) : ""}...</p>
				<p className="card-text">
					<small className="text-muted">
						{author ? author : "Unknown"} | {new Date(date).toGMTString()}
					</small>
				</p>
			</div>
			<div className="card-footer py-3 bg-white" style={{ borderTop: "none" }}>
				<a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
					Read More
				</a>
			</div>
		</div>
	);
};

export default NewsItem;
