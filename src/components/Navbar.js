import React from "react";
import { Link } from "react-router-dom";
// import Themes from "./Themes";

const Navbar = (props) => {
	// Determine the background style based on the mode and navbarColor prop
	const navbarStyle = {
		className: `px-lg-2 navbar fixed-top navbar-expand-lg ${
			props.themeColor ? "" : `bg-${props.mode}`
		}`,
		style: props.themeColor ? { backgroundColor: props.themeColor } : {},
		"data-bs-theme": props.mode,
	};

	return (
		<nav {...navbarStyle}>
			<div className="container-fluid" data-bs-dismiss="collapse">
				<Link className="navbar-brand" to="/">
					NewsNuggets
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarContent"
					style={{ maxHeight: "calc(100vh - 56px)", overflowY: "auto" }}>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/business">
								Business
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/entertainment">
								Entertainment
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/general">
								General
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/health">
								Health
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/science">
								Science
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/sports">
								Sports
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/technology">
								Technology
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/aboutUs">
								About Us
							</Link>
						</li>
					</ul>

					<div>
						<label
							onClick={props.toggleMode}
							// role="switch"
							id="modeSwitch"
							className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`}
							htmlFor="modeSwitch">
							<i
								className={
									props.mode === "light" ? "bi bi-moon-stars-fill" : "bi bi-brightness-high-fill"
								}></i>{" "}
							<span className="d-lg-none">Toggle Theme</span>
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
