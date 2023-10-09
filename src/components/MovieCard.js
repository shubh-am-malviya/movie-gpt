import React from "react";
import { TMDB_MOVIE_IMG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movieId, posterPath }) => {
	const navigate = useNavigate();

	if (!posterPath) return null;

	const handleMovieClick = () => {
		navigate(`/browse/${movieId}`);
	};

	return (
		<div
			className="cursor-pointer w-36 md:w-48 mr-4 hover:border-2 border-white rounded-md hover:shadow-2xl"
			onClick={handleMovieClick}
		>
			<img className="rounded-md" src={TMDB_MOVIE_IMG_URL + posterPath} alt="Movie Poster" />
		</div>
	);
};

export default MovieCard;
