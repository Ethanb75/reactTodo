import React from 'react';
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
    render: function() {
        //because of redux we can get these values because of connect
        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/> 
                        Show Completed Todos
                    </label>
                </div>
            </div>
        );
    }
});

//the redux connection
//we return whatever we want as props on the component
export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);