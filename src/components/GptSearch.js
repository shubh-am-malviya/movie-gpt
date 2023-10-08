import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
			<div>
				<img
					className="fixed w-full h-full object-cover -z-10"
					src={BG_IMG_URL}
					alt="background-img"
				/>
			</div>
			<div>
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;
