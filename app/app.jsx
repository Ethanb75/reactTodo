//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');
//provider let's you provide it's store to all the children and grandchildren
var {Provider} = require('react-redux');

//configures routes for our single app
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('new State', store.getState());
});


$(document).foundation();

//require for our custom app.css
require('style!css!sass!applicationStyle');

ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<Provider store={store}>
			<TodoApp />
		</Provider>,
		document.getElementById('app')
);