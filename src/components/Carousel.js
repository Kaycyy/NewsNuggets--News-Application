import React, { useEffect } from "react";

const Carousel = (props) => {
	useEffect(() => {
		// Initialize the Bootstrap carousel
		const carousel = document.querySelector("#carouselExampleSlidesOnly");
		const bsCarousel = new window.bootstrap.Carousel(carousel, {
			interval: 3000, // Set interval for sliding
		});

		// Destroy the carousel on component unmount to prevent memory leaks
		return () => bsCarousel.dispose();
	}, []);

	return (
		<>
			<div className="container p-0">
				<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card" style={{ width: "100%" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card" style={{ width: "100%" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card" style={{ width: "100%" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
