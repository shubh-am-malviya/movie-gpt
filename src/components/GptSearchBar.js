import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import openai from "../utils/openAiConfig";
import { lang } from "../utils/langContants";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../redux/gptSearchSlice";

const GptSearchBar = () => {
	const dispatch = useDispatch();
	const appLang = useSelector((state) => state.appConfig.lang);

	const searchText = useRef();

	// search movie in TMDB
	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			TMDB_API_OPTIONS
		);
		const json = await data.json();

		return json.results;
	};

	const handleGptSearchClick = async () => {
		const movieSearchQuery =
			"Act as a Movie Recommendation system and suggest some movies for the query : " +
			searchText.current.value +
			". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

		const gptMovieResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: movieSearchQuery }],
			model: "gpt-3.5-turbo",
		});

		const gptMovies = gptMovieResults.choices?.[0]?.message?.content
			.split(",")
			.map((m) => m.trim());

		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
		const tmdbResults = await Promise.all(promiseArray);
		console.log("tmdbResults", tmdbResults);

		// Filtering movie results to exact movie names
		const filteredTmdbResults = tmdbResults.map((movieResults, index) =>
			movieResults.filter(
				(movie) => movie.title === gptMovies[index] || movie.original_title === gptMovies[index]
			)
		);

		dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: filteredTmdbResults }));
	};

	return (
		<div className="pt-32 flex justify-center">
			<form
				className="bg-black p-4 w-1/2 rounded-sm grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={searchText}
					type="text"
					className="col-span-9 p-2 rounded-sm"
					placeholder={lang[appLang].gptSearchPlaceholder}
				/>
				<button
					className="bg-red-700 col-span-3 ml-2 rounded-md text-white flex justify-center items-center"
					onClick={handleGptSearchClick}
				>
					<MagnifyingGlassIcon className="w-6 mr-1" /> {lang[appLang].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
