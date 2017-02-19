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
                text: 'walk me dogs'
            };
            var res = reducers.todoReducer(df([]),df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual('walk me dogs');

        });
        it('should toggle the todo item', () => {
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
                type: "TOGGLE_TODO",
                id: '124'
            };
            var res = reducers.todoReducer(df(todos),df(action));

            expect(res[1].completed).toEqual(false);
            expect(res[1].completedAt).toEqual(undefined);
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