//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');
//provider let's you provide it's store to all the children and grandchildren
var {Provider} = require('react-redux');

//configures routes for our single app
var {hashHistory} = require('react-router');
// var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import myRouter from 'app/router/';
//event listener for store changes
store.subscribe(() => {
	var state = store.getState();
	console.log('New State', state);
	// TodoAPI.setTodos(state.todos);
});

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(actions.startAddTodos());
		hashHistory.push('/todo');
	} else {
		hashHistory.push('/');
	}
});





$(document).foundation();

//require for our custom app.css
require('style!css!sass!applicationStyle');



ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<Provider store={store}>
			{myRouter}
		</Provider>,
		document.getElementById('app')
);