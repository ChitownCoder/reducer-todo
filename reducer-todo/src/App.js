import React from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="paper">
				<div className="pattern">
					<div className="notes">
						<h1>Reducer Todo</h1>
						<Todo />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
