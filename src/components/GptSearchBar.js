import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { lang } from "../utils/langContants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
	const appLang = useSelector((state) => state.appConfig.lang);
	return (
		<div className="pt-32 flex justify-center">
			<form className="bg-black p-4 w-1/2 rounded-sm grid grid-cols-12">
				<input
					type="text"
					className="col-span-9 p-2 rounded-sm"
					placeholder={lang[appLang].gptSearchPlaceholder}
				/>
				<button className="bg-red-700 col-span-3 ml-2 rounded-md text-white flex justify-center items-center">
					<MagnifyingGlassIcon className="w-6 mr-1" /> {lang[appLang].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
