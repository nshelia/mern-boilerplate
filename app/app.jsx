import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';

require('app.scss');

class App extends React.Component {
	render() {
		return (
			<Main />
		);
	}
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);