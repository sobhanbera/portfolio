import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import MainComponent from "../components/MainComponent";

function App() {
	return (
		<ErrorBoundary>
			<div className='start'>
				<MainComponent />
			</div>
		</ErrorBoundary>
	);
}

export default App;
