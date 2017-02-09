import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';
import TodoAPI from 'TodoAPI';
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
                        completed: false
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
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleNewTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;