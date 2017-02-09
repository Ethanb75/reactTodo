import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
    handleClick: function(){
        this.props.onToggle(this.props.id);
    },
    render: function(){
        var {text,id,completed,time,completedAt} = this.props;
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
            <div onClick={this.handleClick}>
                 <input type="checkbox" checked={completed} />
                 <p>{text}</p>
                 <p>{renderDate()}</p>
            </div>
        );
    }
});
module.exports = Todo;