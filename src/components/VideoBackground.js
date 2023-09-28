import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

	useMovieTrailer(movieId);

	return (
		<div>
			{trailerVideo && (
				<iframe
					className="w-screen aspect-video"
					src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&loop=1&rel=0`}
					title="YouTube video player"
					allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
				></iframe>
			)}
		</div>
	);
};

export default VideoBackground;
