import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";

const MainContainer = () => {
	const movies = useSelector((state) => state.movies?.nowPlayingMovies);

	if (!movies) return;

	const { original_title, overview, id } = movies[0];

	return (
		<div className="bg-black pt-[25%] md:pt-0">
			<VideoInfo title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
