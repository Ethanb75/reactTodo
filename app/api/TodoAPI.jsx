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
    }
};