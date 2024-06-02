import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [pageSize, setPageSize] = useState(15);
	const [totalResults, setTotalResults] = useState(0);

	const handleCaps = (element) => {
		return element.charAt(0).toUpperCase() + element.slice(1);
	};

	document.title = handleCaps(props.category) + " - NewsMonkey";

	const updateNews = async () => {
		props.setProgress(0);
		const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=21f0db1aefb5483c8f7059813e4f21bb&page=${page}&pageSize=${pageSize}`;
		setLoading(true);
		props.setProgress(30);
		let data = await fetch(url);
		props.setProgress(50);
		let parsedData = await data.json();
		props.setProgress(70);
		// console.log(props.country);
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setLoading(false);
		props.setProgress(100);
	};

	useEffect(() => {
		updateNews();
		/*eslint-disable-next-line*/
	}, [props.country]);

	const fetchData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${
			props.country
		}&apiKey=21f0db1aefb5483c8f7059813e4f21bb&page=${page + 1}&pageSize=${pageSize}`;
		setPage(page + 1);
		setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();

		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);

		setLoading(false);
	};

	return (
		<div className="container p-0">
			<h2
				className={`text-center text-${props.mode === "light" ? "dark" : "light"}`}
				style={{
					margin: "70px 0 40px 0",
					// marginTop: "70px",
				}}>
				Top {handleCaps(props.category)} Headlines!
			</h2>
			{loading && <Spinner />}
			<InfiniteScroll
				dataLength={articles.length} //This is important field to render the next data
				next={fetchData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}>
				<div
					className="row"
					style={{
						margin: "0 auto",
					}}>
					{articles.map((element) => {
						return (
							<div className="col-md-6 col-lg-4 px-4" key={element.url}>
								<NewsItem
									title={element.title}
									description={element.description}
									imageUrl={element.urlToImage}
									newsUrl={element.url}
									author={element.author}
									date={element.publishedAt}
								/>
							</div>
						);
					})}
				</div>
			</InfiniteScroll>

			{/* {!this.state.loading && (
					<nav aria-label="Page navigation example ">
						<ul className="pagination d-flex justify-content-center">
							<li className={`page-item ${this.state.page <= 1 ? "disabled" : ""}`}>
								<a className="page-link" href="#" aria-label="Previous" onClick={this.handlePrev}>
									<span aria-hidden="true">&laquo; Prev</span>
								</a>
							</li>
							<li
								className={`page-item ${
									Math.ceil(this.state.totalResults / this.state.pageSize) < this.state.page + 1
										? "disabled"
										: ""
								}`}>
								<a className="page-link" href="#" aria-label="Next" onClick={this.handleNext}>
									<span aria-hidden="true">Next &raquo;</span>
								</a>
							</li>
						</ul>
					</nav>
				)} */}
		</div>
	);
};

News.defaultProps = {
	country: "in",
	category: "general",
};

News.propTypes = {
	country: PropTypes.string,
};

export default News;
