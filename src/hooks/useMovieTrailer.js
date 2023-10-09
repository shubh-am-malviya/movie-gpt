import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addCurrentMovieTrailerVideo, addTrailerVideo } from "../redux/moviesSlice";

const useMovieTrailer = (movieId, movieDetailPage) => {
	const dispatch = useDispatch();
	const trailerVideo = useSelector((state) => state.movies.trailerVideo);

	useEffect(() => {
		if (trailerVideo && !movieDetailPage) return;
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
		if (movieDetailPage) {
			dispatch(addCurrentMovieTrailerVideo(trailer));
		} else {
			dispatch(addTrailerVideo(trailer));
		}
	};
};

export default useMovieTrailer;
