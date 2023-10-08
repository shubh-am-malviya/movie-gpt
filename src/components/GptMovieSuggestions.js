import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((state) => state.gptSearch);

	if (!movieNames) return null;

	return (
		<div className="bg-black bg-opacity-30 m-4 mx-8 p-4">
			{movieNames.map((movie, index) => (
				<div className="mb-8">
					<MovieList key={movie} title={movie} movies={movieResults[index]} />
				</div>
			))}
		</div>
	);
};

export default GptMovieSuggestions;
