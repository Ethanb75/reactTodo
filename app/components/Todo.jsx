import React from 'react';
import moment from 'moment';
var {connect} = require('react-redux');
var actions = require('actions');


export var Todo = React.createClass({
    render: function(){
        var {text,id,completed,time,completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = "Created ";
            var timeStamp = time;

            if (completed){
               message = "Completed ";
               timeStamp = completedAt; 
            }

            return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
        };
        return(
            <div className={todoClassName} onClick={() => {
                    dispatch(actions.startToggleTodo(id, !completed));
                }}>
                 <div>
                    <input type="checkbox" checked={completed} />
                 </div>
                 <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                 </div>
            </div>
        );
    }
});

export default connect()(Todo);
//connect (and then calling w/ todo) connects that component to the store
//we already have dispatch available by using connect
//it's available on this.props