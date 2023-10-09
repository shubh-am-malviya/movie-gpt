import React from "react";

const GptSuggestionsShimmer = () => {
	return (
		<div className="m-4 mx-8 md:flex md:justify-center">
			<div className="bg-black bg-opacity-30 p-4 md:w-2/3">
				<div className="animate-pulse">
					<div className="rounded-md bg-gray-800 w-24 h-8"></div>
					<div className="mt-4 w-36 h-48 md:h-56 md:w-48 mr-4 rounded-md bg-gray-800"></div>
				</div>
				<div className="mt-6 animate-pulse">
					<div className="rounded-md bg-gray-800 w-24 h-8"></div>
					<div className="mt-4 w-36 h-48 md:h-56 md:w-48 mr-4 rounded-md bg-gray-800"></div>
				</div>
			</div>
		</div>
	);
};

export default GptSuggestionsShimmer;
