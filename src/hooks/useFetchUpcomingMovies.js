import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../redux/moviesSlice";

const useFetchUpcomingMovies = () => {
	const dispatch = useDispatch();

	const getUpcomingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?&page=1",
			TMDB_API_OPTIONS
		);
		const jsonData = await data.json();
		// console.log("NOW_PLAYING_MOVIES", jsonData?.results);
		dispatch(addUpcomingMovies(jsonData?.results));
	};

	useEffect(() => {
		getUpcomingMovies();
	}, []);
};

export default useFetchUpcomingMovies;
