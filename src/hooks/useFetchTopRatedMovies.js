import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../redux/moviesSlice";

const useFetchTopRatedMovies = () => {
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?&page=1",
			TMDB_API_OPTIONS
		);
		const jsonData = await data.json();
		// console.log("NOW_PLAYING_MOVIES", jsonData?.results);
		dispatch(addTopRatedMovies(jsonData?.results));
	};

	useEffect(() => {
		getTopRatedMovies();
	}, []);
};

export default useFetchTopRatedMovies;
