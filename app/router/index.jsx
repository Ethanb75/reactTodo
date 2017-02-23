import React from 'React';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//my modules
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'app/firebase/';


var requireLogin = (nextState, replace, next) => {
	if (!firebase.auth().currentUser){
		replace('/');
	}
	next();
};
var redirectToTodo = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace('/todo');
	}
	next();
};

export default (
	<Router history={hashHistory}>
		<Route path="/">
			<Route path="todo" component={TodoApp} onEnter={requireLogin}/>
			<IndexRoute component={Login} onEnter={redirectToTodo}/>
		</Route>
	</Router>
);