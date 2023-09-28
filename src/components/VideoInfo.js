import React from "react";

const VideoInfo = ({ title, overview }) => {
	return (
		<div className="absolute w-screen aspect-video text-white pt-[20%] px-24 bg-gradient-to-r from-black to-transparent to-80%">
			<h1 className="font-bold text-5xl">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<button className="bg-white p-2 px-12 text-xl rounded-md text-black cursor-pointer hover:bg-opacity-80">
				▶️ Play
			</button>
			<button className="ml-2 bg-white p-2 px-12 text-xl rounded-md bg-opacity-30 cursor-pointer hover:bg-opacity-50">
				More Info
			</button>
		</div>
	);
};

export default VideoInfo;
