import * as redux from 'redux';
import thunk from 'redux-thunk';
var {searchTextReducer,showCompletedReducer,todoReducer} = require('reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        //takes our middleware and composes it
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
};
