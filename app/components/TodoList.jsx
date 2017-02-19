import React from 'react';
var {connect} = require('react-redux');
var TodoApi = require('TodoAPI');
import Todo from 'Todo';
export var TodoList = React.createClass({
    render: function(){
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if(todos.length === 0){
                return (
                    <p className="container__message">Yeah Nothing To Do!</p>
                );
            }
            return TodoApi.filterTodos(todos, showCompleted, searchText).map((todoItem) => {
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
        return state;
    }
)(TodoList);