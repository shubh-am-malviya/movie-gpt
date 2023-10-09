import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

import Header from "./Header";
import { BG_IMG_URL } from "../utils/constants";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import MovieDetailsVideo from "./MovieDetailsVideo";
import MovieDetailsInfo from "./MovieDetailsInfo";
import { removeCurrentMovieDetails, removeCurrentMovieTrailerVideo } from "../redux/moviesSlice";

const MovieDetail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { movieId } = useParams();

	useFetchMovieDetails(movieId);

	useEffect(() => {
		return () => {
			dispatch(removeCurrentMovieTrailerVideo());
			dispatch(removeCurrentMovieDetails());
		};
	}, []);

	const backClickHandler = () => {
		navigate("/browse");
	};

	return (
		<>
			<Header />
			<div>
				<img
					className="fixed w-full h-full object-cover -z-10"
					src={BG_IMG_URL}
					alt="background-img"
				/>
			</div>
			<div className="pt-40 md:pt-24 md:mx-12">
				<button
					className="flex bg-white cursor-pointer hover:opacity-80 p-1 rounded-md mx-2 md:mx-0 mb-4"
					onClick={backClickHandler}
				>
					<ArrowUturnLeftIcon className="w-6 mr-1" /> Back
				</button>
				<div className="flex flex-col md:flex-row">
					<div className="w-screen md:w-1/2">
						<MovieDetailsVideo movieId={movieId} />
					</div>
					<div className="text-white p-2 w-full md:w-1/2">
						<MovieDetailsInfo />
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
