import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addCurrentMovieDetails } from "../redux/moviesSlice";

const useFetchMovieDetails = (movieId) => {
	const dispatch = useDispatch();

	const getMovieDetails = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, TMDB_API_OPTIONS);
		const jsonData = await data.json();
		dispatch(addCurrentMovieDetails(jsonData));
	};

	useEffect(() => {
		getMovieDetails();
	}, []);
};

export default useFetchMovieDetails;
