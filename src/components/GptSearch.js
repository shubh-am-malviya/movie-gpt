import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
	return (
		<div>
			<div>
				<img className="fixed h-screen w-full -z-10" src={BG_IMG_URL} alt="background-img" />
			</div>
			<GptSearchBar />
			<GptMovieSuggestions />
		</div>
	);
};

export default GptSearch;
