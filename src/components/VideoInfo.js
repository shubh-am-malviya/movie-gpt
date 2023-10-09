import React from "react";
import { useNavigate } from "react-router-dom";

const VideoInfo = ({ movieId, title, overview }) => {
	const navigate = useNavigate();

	const handleMoreInfoClick = () => {
		navigate(`/browse/${movieId}`);
	};

	return (
		<div className="absolute w-screen aspect-video text-white pt-[25%] md:pt-[20%] px-8 md:px-24 bg-gradient-to-r from-black to-transparent to-80%">
			<h1 className="font-bold text-xl md:text-5xl">{title}</h1>
			<p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
			<div className="mt-3 md:m-0">
				<button
					className="bg-white p-2 py-1 md:p-2 md:px-12 md:text-xl rounded-md text-black cursor-pointer hover:bg-opacity-80"
					onClick={handleMoreInfoClick}
				>
					More Info
				</button>
				{/* <button className="hidden md:inline-block ml-2 bg-white p-2 px-12 text-xl rounded-md bg-opacity-30 cursor-pointer hover:bg-opacity-50">
					More Info
				</button> */}
			</div>
		</div>
	);
};

export default VideoInfo;
