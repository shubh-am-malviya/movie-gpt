import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import { TMDB_MOVIE_IMG_URL } from "../utils/constants";

const MovieDetailsVideo = ({ movieId }) => {
	const trailerVideo = useSelector((state) => state.movies?.currentMovieTrailerVideo);
	const movieDetails = useSelector((state) => state.movies?.currentMovieDetails);

	return (
		<>
			<VideoBackground movieId={movieId} movieDetailPage={true} />

			{/* If trailer is not available, show backdrop image */}
			{!trailerVideo && movieDetails && (
				<img
					className="w-full"
					src={TMDB_MOVIE_IMG_URL + movieDetails?.backdrop_path}
					alt="Movie Poster"
				/>
			)}
		</>
	);
};

export default MovieDetailsVideo;
