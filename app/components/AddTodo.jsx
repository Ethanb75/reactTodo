import React from 'react';
var actions = require('actions');
var {connect} = require('react-redux');
export var AddTodo = React.createClass({
    addTodo: function(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var todo = this.refs.todo.value;
        if (todo.length > 0){
            this.refs.todo.value = '';
            dispatch(actions.addTodo(todo));
        } else {
            //automatically select the input again so the user can try again
            this.refs.todo.focus();
        }
    },
    render: function(){
        return (
            <div className="container__footer">
                <form action="" onSubmit={this.addTodo}>
                    <input type="text" ref="todo" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});
//since AddTodo doesn't need any properties off the state we don't have to pass it anything like we did
//for TodoList
export default connect()(AddTodo)