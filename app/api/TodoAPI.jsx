var $ = require('jquery');

module.exports = {
    filterTodos: function(todos, showCompleted, searchText) {
        var filterTodos = todos;
        
        //filter by showCompleted
        filterTodos = filterTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //filter by searchText
        if(searchText != undefined){
            filterTodos = filterTodos.filter((todo) => {
                
                return todo.text.toLowerCase().includes(searchText);
            });
        }
        // sort todos with non-completed first
        filterTodos.sort((a,b) => {
            if(a.completed === false && b.completed === true){
                return -1;
            } else if (a.completed === true && b.completed === false){
                return 1;
            } else {
                return 0;
            }
        })
        return filterTodos;
    }
};