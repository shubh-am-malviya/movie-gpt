import React from "react";
import { useSelector } from "react-redux";

const MovieDetailsInfo = () => {
	const movieDetails = useSelector((state) => state.movies?.currentMovieDetails);

	if (!movieDetails) return null;

	const { adult, overview, genres, release_date, title, vote_average } = movieDetails;

	return (
		<div className="p-2 bg-black bg-opacity-30">
			<h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
			<p className="my-2">{Math.round((vote_average + Number.EPSILON) * 100) / 100 ?? ""}</p>
			<p className="my-2">Adult: &nbsp; {adult ? "Yes" : adult === false ? "No" : ""}</p>
			<p className="my-2">{new Date(release_date)?.toLocaleDateString() ?? ""}</p>
			<p className="my-2">{genres?.map((genre) => genre?.name)?.join(", ")}</p>
			<p className="my-2">{overview}</p>
		</div>
	);
};

export default MovieDetailsInfo;
