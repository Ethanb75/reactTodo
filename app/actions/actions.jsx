import firebase, {firebaseRef, githubProvider, twitterProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};
export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};
export var removeCompletedTodos = () => {
    return {
        type: 'REMOVE_COMPLETED_TODOS',
    };
};
export var toggleShowCompleted = () => {
    return{
        type: 'TOGGLE_SHOW_COMPLETED',
    } ;
};
export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};
export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
                text,
                completed: false,
                time: moment().unix(),
                completedAt: null
        };
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
        return todoRef.then(()=>{
                dispatch(addTodo({
                    ...todo,
                    id: todoRef.key
                }));
            }, (e) => {
                console.log(e)
            });
    };
};
export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(()=>{
            dispatch(updateTodo(id, updates));
        }); 
    }
};
export var startAddTodos = () => {
    var parsedTodos = [];
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.once('value').then((snap) =>{
            var todos = snap.val() || {};

            Object.keys(todos).forEach((todoId) =>{
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(addTodos(parsedTodos));
        });
    };
};
export var startGitLogin = () => {
    return (dispatch, getState) => {
        //firebase.auth returns a bunch of authentication related functions
        return firebase.auth().signInWithPopup(githubProvider).then((result) =>{
            dispatch(login(result.user.uid));
        }, (e) => {
            console.log(e)
        });
    }
};
export var startTwitterLogin = () => {
    return (dispatch, getState) => {
        //firebase.auth returns a bunch of authentication related functions
        return firebase.auth().signInWithPopup(twitterProvider).then((result) =>{
            dispatch(login(result.user.uid));
        }, (e) => {
            console.log(e)
        });
    }
};
export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Yer Outta here');
            dispatch(logout());
            dispatch(removeCompletedTodos());
        })
    };
};
export var login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    }
};
export var logout = () => {
    return {
        type: 'LOGOUT'
    }
}