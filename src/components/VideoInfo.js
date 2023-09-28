import React from "react";

const VideoInfo = ({ title, overview }) => {
	return (
		<div className="absolute w-screen aspect-video text-white pt-80 px-24 bg-gradient-to-tr from-black">
			<h1 className="font-bold text-5xl">{title}</h1>
			<p className="py-6 text-lg w-1/3">{overview}</p>
			<button className="bg-white p-2 px-12 text-xl rounded-md text-black hover:bg-opacity-80">
				▶️ Play
			</button>
			<button className="ml-2 bg-white p-2 px-12 text-xl rounded-md bg-opacity-30">
				More Info
			</button>
		</div>
	);
};

export default VideoInfo;
