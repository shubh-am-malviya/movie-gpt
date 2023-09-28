import React from "react";

import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useFetchNowPlayingMovies();

	return (
		<>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</>
	);
};

export default Browse;
