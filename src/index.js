import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';

class Test extends React.Component {
	render() {
		const arr = [<div>1</div>,<div>2</div>,<div>3</div>];
		return(
			<div>
				{arr}
			</div>
		)
	}
}

// Render the main component into the dom
ReactDOM.render(<Test />, document.getElementById('app'));
