import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useFetchNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?&page=1",
			TMDB_API_OPTIONS
		);
		const jsonData = await data.json();
		// console.log("NOW_PLAYING_MOVIES", jsonData?.results);
		dispatch(addNowPlayingMovies(jsonData?.results));
	};

	useEffect(() => {
		!nowPlayingMovies && getNowPlayingMovies();
	}, []);
};

export default useFetchNowPlayingMovies;
