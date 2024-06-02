import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Alerts from "./components/Alerts";
import AboutUs from "./components/AboutUs";
// import Elements from "./components/Elements";

const App = () => {
	const [progress, setProgress] = useState(0);
	const [mode, setmode] = useState("light");
	const [alert, setAlert] = useState(null);
	const [themeColor, setthemeColor] = useState(null);
	// eslint-disable-next-line
	const [country, setCountry] = useState("in");

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};

	// const handleTheme = (color) => {
	// 	document.body.style.backgroundColor = color;
	// 	showAlert("Theme Changed!", "success");

	// 	// You might want to reset the mode to normal or a custom value
	// 	setmode(mode); // You could add 'custom' mode to differentiate

	// 	// Update Navbar color based on chosen theme
	// 	const themeColorMap = {
	// 		"#C63D2F": "#AF0404",
	// 		"#704264": "#502d47",
	// 		"#FF9843": "#cc7a36",
	// 		"#A8B94E": "#7e7f30",
	// 		"#EF8F6B": "#c5644e",
	// 		"#8ECDDD": "#5ca8af",
	// 	};

	// 	setthemeColor(themeColorMap[color]);
	// };

	// const handleCountryChange = (code) => {
	// 	setCountry(code);
	// 	console.log(country);
	// };

	const toggleMode = () => {
		if (mode === "light" || mode === "custom") {
			setmode("dark");
			document.body.style.backgroundColor = "#0f0f0f";
			setthemeColor(null); // Clear theme color when switching modes
			showAlert("Dark Mode Enabled!", "success");
		} else {
			setmode("light");
			document.body.style.backgroundColor = "white";
			setthemeColor(null); // Clear theme color when switching modes
			showAlert("Light Mode Enabled!", "success");
		}
	};

	return (
		<>
			<div>
				<Router>
					<Navbar toggleMode={toggleMode} mode={mode} themeColor={themeColor} />
					<LoadingBar color="#f11946" progress={progress} />
					<Alerts alert={alert} />
					<div className="container" style={{ marginLeft: "0 auto" }}>
						<Routes>
							<Route
								exact
								path="/"
								element={
									<>
										{/* <div className="m-2" style={{ paddingTop: "35px" }}>
											<Elements
												handleTheme={handleTheme}
												handleCountryChange={handleCountryChange}
											/>
										</div> */}

										<News
											setProgress={setProgress}
											key="general"
											country={country}
											category="general"
											toggleMode={toggleMode}
											mode={mode}
										/>
									</>
								}></Route>
							<Route
								exact
								path="/business"
								element={
									<News
										setProgress={setProgress}
										key="business"
										country={country}
										category="business"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route
								exact
								path="/entertainment"
								element={
									<News
										setProgress={setProgress}
										key="entertainment"
										country={country}
										category="entertainment"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route
								exact
								path="/general"
								element={
									<News
										setProgress={setProgress}
										key="general"
										country={country}
										category="general"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>

							<Route
								exact
								path="/health"
								element={
									<News
										setProgress={setProgress}
										key="health"
										country={country}
										category="health"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route
								exact
								path="/science"
								element={
									<News
										setProgress={setProgress}
										key="science"
										country={country}
										category="science"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route
								exact
								path="/sports"
								element={
									<News
										setProgress={setProgress}
										key="sports"
										country={country}
										category="sports"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route
								exact
								path="/technology"
								element={
									<News
										setProgress={setProgress}
										key="technology"
										country={country}
										category="technology"
										toggleMode={toggleMode}
										mode={mode}
									/>
								}></Route>
							<Route exact path="/aboutUs" element={<AboutUs mode={mode} />} />
						</Routes>
					</div>
				</Router>
			</div>
		</>
	);
};

export default App;
