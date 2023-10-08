import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((state) => state.gptSearch);

	if (!movieNames) return null;

	return (
		<div className="m-4 mx-8 md:flex md:justify-center">
			<div className="bg-black bg-opacity-30 p-4 md:w-2/3">
				{movieNames.map((movie, index) => (
					<div key={movie} className="mb-8 mx-auto">
						<MovieList title={movie} movies={movieResults[index]} />
					</div>
				))}
			</div>
		</div>
	);
};

export default GptMovieSuggestions;
