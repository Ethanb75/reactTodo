//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');

//configures routes for our single app
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('new State', store.getState());
});

store.dispatch(actions.addTodo('add me'));

$(document).foundation();

//require for our custom app.css
require('style!css!sass!applicationStyle');

ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<TodoApp />,
		document.getElementById('app')
);