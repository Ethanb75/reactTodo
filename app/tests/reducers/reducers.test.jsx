var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', ()=> {
    describe('Search text reducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'wow'
            };
            var res = reducers.searchTextReducer(df(''),df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('Toggle show completed reducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false),df(action));
            expect(res).toEqual(true);
        });
    });
    describe('todo reducer', () => {
        it('should add a new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123',
                    text: 'todo',
                    completed: false,
                    completedAt: 600
                }
            };
            var res = reducers.todoReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);

        });
        it('should toggle the todo item', () => {
            var updates = {
                completed: false,
                completedAt: null
            }
            var todos = [{
                id: '123',
                text: 'this',
                completed: true,
                time: 123,
                completedAt: 125
            },
            {
                id: '124',
                text: 'this',
                completed: true,
                time: 123,
                completedAt: 125
            }
            ];
            var action = {
                type: "UPDATE_TODO",
                id: todos[0].id,
                updates
            };
            var res = reducers.todoReducer(df(todos),df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });
        it('should add existing todos', () => {
             var todos = [
                {
                    id: '124',
                    text: 'this',
                    completed: true,
                    time: 123,
                    completedAt: 125
                }
            ];
            var action = {
                type: "ADD_TODOS",
                todos
            };
            var res = reducers.todoReducer(df([]),df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    })
});