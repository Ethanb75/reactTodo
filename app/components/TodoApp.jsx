import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import moment from 'moment';

import * as Redux from 'react-redux';
import * as actions from 'actions';
//use createClass because it will keep state
export var TodoApp = React.createClass({
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    },
    render() {
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <h1 className="page-title">Todo Application</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(TodoApp)