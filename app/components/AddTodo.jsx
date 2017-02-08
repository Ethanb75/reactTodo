import React from 'react';
var AddTodo = React.createClass({
    addTodo: function(e){
        e.preventDefault();
        var todo = this.refs.todo.value;
        if (todo.length > 0){
            this.refs.todo.value = '';
            this.props.onAddTodo(todo);
        } else {
            //automatically select the input again so the user can try again
            this.refs.todo.focus();
        }
    },
    render: function(){
        return (
            <div>
                <form action="" onSubmit={this.addTodo}>
                    <input type="text" ref="todo" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});
module.exports = AddTodo;