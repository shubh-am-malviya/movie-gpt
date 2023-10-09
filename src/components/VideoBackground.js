import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, movieDetailPage }) => {
	const trailerVideo = useSelector((state) => {
		if (movieDetailPage) return state.movies?.currentMovieTrailerVideo;
		return state.movies?.trailerVideo;
	});

	useMovieTrailer(movieId, movieDetailPage);

	return (
		<>
			{trailerVideo && (
				<iframe
					className="w-full aspect-video"
					src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=${
						movieDetailPage ? 1 : 0
					}&loop=1`}
					title="YouTube video player"
					allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
				></iframe>
			)}
		</>
	);
};

export default VideoBackground;
