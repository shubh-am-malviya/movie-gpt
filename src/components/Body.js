import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import Browse from "./Browse";
import ErrorBoundary from "./ErrorBoundary";
import MovieDetail from "./MovieDetail";

const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: (
				<ErrorBoundary>
					<Login />
				</ErrorBoundary>
			),
		},
		{
			path: "/browse",
			element: (
				<ErrorBoundary>
					<Browse />
				</ErrorBoundary>
			),
		},
		{
			path: "/browse/:movieId",
			element: (
				<ErrorBoundary>
					<MovieDetail />
				</ErrorBoundary>
			),
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
