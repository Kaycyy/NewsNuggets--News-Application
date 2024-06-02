import React from "react";
import nugget from "./nugget.png";

export default function About(props) {
	document.title = "NewsNuggets | Bite-sized News, served fresh Daily!";

	return (
		<div className="container px-md-5 px-1 pt-3 my-5">
			{/* <h2
				className={`text-center text-${props.mode === "light" ? "dark" : "light"}`}
				style={{
					margin: "35px 0",
					marginTop: "70px",
				}}>
				About NewsNuggets <br />
			</h2> */}
			<div
				className={`text-${props.mode === "light" ? "dark" : "light"}`}
				style={{ textAlign: "justify" }}>
				<h4 className="d-flex align-items-baseline" style={{ fontSize: "40px" }}>
					Hello Nuggetarians!
					<img src={nugget} alt="nugget" style={{ width: "100px" }} />
				</h4>

				<div>
					Welcome to News Nuggets, your ultimate source for bite-sized updates and juicy headlines
					from around the globe. We're all about serving up the latest news in a fun, fresh, and
					totally digestible way. Whether you're a seasoned news junkie or just dipping your toes
					into the world of current events, we've got something for everyone. So grab your favorite
					snack, kick back, and let's dive into the fascinating world of News Nuggets together!
				</div>
			</div>

			<div className=" mt-4 accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne">
							Nugget Quest
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							We aim to serve up news in bite-sized portions, delivering a seamless and immersive
							browsing experience driven by innovative technology and user-friendly design
							principles. We recognize the hustle of today's world, which is why we've crafted a
							News App that not only dishes out the latest scoops but also prioritizes your ease and
							enjoyment.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							Nugget Gems
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							Dive into our signature features: <br />
							<strong>Infinte Scroll:</strong> Say goodbye to endless scrolling with our innovative
							Nugget Navigators feature, guiding you through a continuous flow of news stories
							without the hassle of multiple clicks. <br />
							<strong>Top Loading Bar:</strong> You'll always know when new content is being loaded,
							ensuring a smooth and uninterrupted browsing experience. No more waiting around for
							pages to refresh – just sit back and savor the news. <br />
							But News Nuggets is more than just a news app – it's a gathering place for Nugget
							Navigators, each with a passion for staying informed and connected with the world.
							Dive into this flavor-filled journey as we transform the way you consume news.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							Nugget Tech Specs
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							News Nuggets, built on ReactJS, styled using Bootstrap and powered by NewsAPI, offers
							real-time global headlines with a seamless, device-friendly experience. Its intuitive
							design supports infinite scrolling and a top-loading bar for effortless navigation,
							alongside light and dark mode for optimal viewing. Focused on speed and simplicity,
							News Nuggets epitomizes modern UI/UX design principles for a fluid and engaging news
							experience.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
