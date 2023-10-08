import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movies = useSelector((state) => state.movies);

	return (
		<div className="bg-black">
			<div className="mx-4 md:mx-8 relative mt-0 md:-mt-24">
				<MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
				<MovieList title="Upcoming" movies={movies?.upcomingMovies} />
				<MovieList title="Top Rated" movies={movies?.topRatedMovies} />
				<MovieList title="Popular" movies={movies?.popularMovies} />
			</div>
		</div>
	);
};

export default SecondaryContainer;
