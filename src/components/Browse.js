import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
	const showGptSearch = useSelector((state) => state.gptSearch.showGptSearch);

	useFetchNowPlayingMovies();
	useFetchPopularMovies();
	useFetchTopRatedMovies();
	useFetchUpcomingMovies();

	return (
		<>
			<Header />
			{showGptSearch ? (
				<GptSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</>
	);
};

export default Browse;
