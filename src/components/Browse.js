import React from "react";

import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRatedMovies from "../hooks/useFetchTopRatedMovies";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";

const Browse = () => {
	useFetchNowPlayingMovies();
	useFetchPopularMovies();
	useFetchTopRatedMovies();
	useFetchUpcomingMovies();

	return (
		<>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</>
	);
};

export default Browse;
