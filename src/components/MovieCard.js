import React from "react";
import { TMDB_MOVIE_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return null;
	return (
		<div className="w-48 mr-4">
			<img className="rounded-md" src={TMDB_MOVIE_IMG_URL + posterPath} alt="Movie Poster" />
		</div>
	);
};

export default MovieCard;
