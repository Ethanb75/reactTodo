import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI tests', () => {
    //Mocha API, also an after each
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('Should exist', () => {
        expect(TodoAPI).toExist();
    });
    describe('setTodos tests', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 101010101,
                text: 'wow',
                completed: false
            }];
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            //we wont use toBe here because toBe checks if they are the same objects in memory
            //while toEqual checks if they are equal
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos array', () => {
            var badTodos = {a: 'notAnArray'};
            TodoAPI.setTodos(badTodos);
            
            expect(localStorage.getItem('todos')).toBe(null);

        });
    }); 
    describe('getTodos tests', () => {
        it('should return an empty array for bad localStorage data', ()=>{
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return todos if valid array in localStorage', () => {
            var todos = [{
                id: 101010101,
                text: 'wow',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
})