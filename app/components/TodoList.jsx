import React from 'react';
var Todo = require('Todo');
var TodoList = React.createClass({
    render: function(){
        var {todos,onToggle} = this.props;
        var renderTodos = () => {
            return todos.map((todoItem) => {
                return <Todo key={todoItem.id} {...todoItem} onToggle={onToggle}/>
            });
        };
        return(
            <div>
                {renderTodos()}
            </div>
        );
    }
});
module.exports = TodoList;