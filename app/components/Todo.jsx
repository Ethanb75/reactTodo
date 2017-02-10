import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
    handleClick: function(){
        this.props.onToggle(this.props.id);
    },
    render: function(){
        var {text,id,completed,time,completedAt} = this.props;
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
            <div className={todoClassName} onClick={this.handleClick}>
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
module.exports = Todo;