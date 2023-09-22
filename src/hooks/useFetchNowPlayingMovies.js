import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useFetchNowPlayingMovies = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?&page=1",
			NOW_PLAYING_API_OPTIONS
		);
		const jsonData = await data.json();
		// console.log("NOW_PLAYING_MOVIES", jsonData?.results);
		dispatch(addNowPlayingMovies(jsonData?.results));
	};

	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default useFetchNowPlayingMovies;
