import React from 'react';
var Todo = require('Todo');
var TodoList = React.createClass({
    render: function(){
        var {todos,onToggle} = this.props;
        var renderTodos = () => {
            if(todos.length === 0){
                return (
                    <p className="container__message">Yeah Nothing To Do!</p>
                );
            }
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