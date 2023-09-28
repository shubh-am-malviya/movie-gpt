import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/moviesSlice";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	useEffect(() => {
		getMovieVideos();
	}, []);

	const getMovieVideos = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			TMDB_API_OPTIONS
		);
		const jsonData = await data.json();
		const trailers = jsonData?.results?.filter((video) => video.type === "Trailer");
		const trailer = trailers?.length ? trailers[0] : jsonData.results[0];
		dispatch(addTrailerVideo(trailer));
	};
};

export default useMovieTrailer;
