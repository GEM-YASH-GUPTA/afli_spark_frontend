import React from 'react';
import Header from './components/layout';
import Occupation from './pages/occupation';

function App() {
	return (
		<div className="bg-white-smoke h-screen">
			<Header></Header>
			<Occupation />
		</div>
	);
}

export default App;
