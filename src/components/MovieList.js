import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	return (
		<>
			{movies?.length && (
				<div>
					<h1 className="text-2xl text-white">{title}</h1>
					<div className="flex overflow-x-scroll mt-4">
						<div className="flex">
							{movies?.map((movie) => (
								<MovieCard posterPath={movie?.poster_path} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieList;
