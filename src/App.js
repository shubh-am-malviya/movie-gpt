import { Provider } from "react-redux";

import Body from "./components/Body";
import appStore from "./redux/appStore";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
	return (
		<>
			<Provider store={appStore}>
				<ErrorBoundary>
					<Body />
				</ErrorBoundary>
			</Provider>
		</>
	);
}

export default App;
