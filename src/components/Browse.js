import React from "react";

import Header from "./Header";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";

const Browse = () => {
	useFetchNowPlayingMovies();

	return (
		<>
			<Header />
		</>
	);
};

export default Browse;
