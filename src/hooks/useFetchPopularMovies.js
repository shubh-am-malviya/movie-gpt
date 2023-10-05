import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../redux/moviesSlice";

const useFetchPopularMovies = () => {
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?&page=1",
			TMDB_API_OPTIONS
		);
		const jsonData = await data.json();
		// console.log("NOW_PLAYING_MOVIES", jsonData?.results);
		dispatch(addPopularMovies(jsonData?.results));
	};

	useEffect(() => {
		getPopularMovies();
	}, []);
};

export default useFetchPopularMovies;
