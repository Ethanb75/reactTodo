import React from 'react';
import TodoList from 'TodoList';

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
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;