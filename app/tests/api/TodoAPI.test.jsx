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
   
})