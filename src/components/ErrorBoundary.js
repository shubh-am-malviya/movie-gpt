import React from "react";
import { BG_IMG_URL } from "../utils/constants";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<div>
						<img
							className="fixed w-full h-full object-cover -z-10"
							src={BG_IMG_URL}
							alt="background-img"
						/>
					</div>
					<div className="bg-black bg-opacity-30 text-white text-center pt-20">
						<h1 className="text-3xl">Something went wrong. Please try again later.</h1>
					</div>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
