import React from 'react';
var {connect} = require('react-redux');
import Todo from 'Todo';
export var TodoList = React.createClass({
    render: function(){
        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0){
                return (
                    <p className="container__message">Yeah Nothing To Do!</p>
                );
            }
            return todos.map((todoItem) => {
                return <Todo key={todoItem.id} {...todoItem} />
            });
        };
        return(
            <div>
                {renderTodos()}
            </div>
        );
    }
});
export default connect(
    //we only return the state objects we care about
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);