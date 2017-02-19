import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';
import moment from 'moment';
//use createClass because it will keep state
var TodoApp = React.createClass({
    //when we first get the state we getTodos
    getInitialState: function(){
        return {
            todos: TodoAPI.getTodos()
        };
    },
    //whenever the components state is updated in any way set the Todos
    componentDidUpdate: function(){
        TodoAPI.setTodos(this.state.todos);
    },
    handleNewTodo: function(newTodo){
        var oldTodos = this.state.todos;
        this.setState({
            todos:[
                    ...oldTodos,
                    {
                        id: uuid(),
                        text:newTodo,
                        completed: false,
                        time: moment().unix(),
                        completedAt: undefined
                    }
                ]
            });
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
   
    render: function(){
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
        return (
            <div>
                <h1 className="page-title">Todo Application</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleNewTodo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;