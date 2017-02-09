import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
//use createClass because it will keep state
var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: uuid(),
                    text: 'Walk dog',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Count pennies',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Make Pizza',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Chase cats',
                    completed: false
                }
            ]
        };
    },
    handleNewTodo: function(newTodo){
        var oldTodos = this.state.todos;
        this.setState({
            todos:[
                    ...oldTodos,
                    {
                        id: uuid(),
                        text:newTodo,
                        completed: false
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
    handleToggle: function(id){
        var toggledTodos = this.state.todos.map((el) => {
            if(el.id === id){
                el.completed = !el.completed;
            }
            return el;
        });
        this.setState({todos: toggledTodos})
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleNewTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;