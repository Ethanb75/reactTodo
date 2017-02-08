import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
//use createClass because it will keep state
var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk dog'
                },
                {
                    id: 2,
                    text: 'Count pennies'
                },
                {
                    id: 3,
                    text: 'Make Pizza'
                },
                {
                    id: 4,
                    text: 'Chase cats'
                }
            ]
        };
    },
    handleNewTodo: function(newTodo){
        var newId = this.state.todos.length + 1;
        var oldTodos = this.state.todos;
        this.setState({
            todos:[
                    ...oldTodos,
                    {
                        id:newId,
                        text:newTodo
                    }
                ]
            });
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleNewTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;