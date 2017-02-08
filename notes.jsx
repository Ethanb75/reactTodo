//we initialize some of the items in the TodoApp.jsx (main file)
//pass the initialized state array as props to the todoList (which will contain each list item as an individual component)
//--------
/* TodoApp will pass => the array to TodoList and TodoList will in turn create
* multiple ToDo items
*/

/* Using es6 desctructuring we'll set var {todos} = this.state in TodoApp
*  then we'll pass the array as a prop to todoList and render it
*  
*/

/*
* In TodoList we'll desctructure the todo list: var {todos} = this.props;
* we will return a functin that will iterate over the array, creating a new Todo Item, with a special key
* the key will be the id we created in the array
* so our function maps((TodoItem) => ... 
* the todos array passed in as props, renders <Todo key={todos.id} {...TodoItem}>

*/

/*
* {...TodoItem} the dots are called a spread opperator.
* takes every value as a prop and passes it down
* spread example:
*   var arr1 = [0, 1, 2];
*   var arr2 = [3, 4, 5];
*   arr1.push(...arr2);
*/