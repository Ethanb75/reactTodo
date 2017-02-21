import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase/';
var expect = require('expect');
var actions = require('actions');

//pass in an array of middleware
var createMockStore = configureMockStore([thunk]);

describe('Actions', ()=>{
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Search text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todo: {
                id: 123,
                text: 'anything',
                completed: false,
                completedAt: 6000
            }
        }
        var res = actions.addTodo(action.todo);
        
        expect(res).toEqual(action);
    });
    it('should generate toggle completed action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });
    it('should generate a update todo action', () => {
        var action = {
            type: 'UPDATE_TODO',
            id: '2',
            updates: {
                completed: false
            }
        };
        var res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });
    it('should generate addTodos action obj', () => {
        var todos = [
            {
                id: 111,
                text: 'anything',
                completed: false,
                completedAt: undefined,
                time: 600
            }
        ];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';

        store.dispatch(actions.startAddTodo(todoText)).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });
    describe('Tests with firebase todos', () => {
        var testTodoRef;
        //feature in mocah that allows you to run code before every test case
        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();

            testTodoRef.set({
                text: 'something',
                completed: false,
                time: 6000
            }).then(() => done());
        });
        afterEach((done)=>{
            testTodoRef.remove().then(()=> done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key,true);

            store.dispatch(action).then(()=>{
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();
            }, done);
        })
    })
});