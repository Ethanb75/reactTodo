var $ = require('jquery');

module.exports = {
    setTodos: function(todos){
        if ($.isArray(todos)){
            //local storage only knows how to store a string! that's it!
            //so the js feature JSON.stringify converts our todos array to a string
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        //if successful, try returns todos with the parsed data
        //if fail, nothing happens to todos and the error is console logged
        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {
            console.log(e);
        }
        return $.isArray(todos) ? todos: [];
    },
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