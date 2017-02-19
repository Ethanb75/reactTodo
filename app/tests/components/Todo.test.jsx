import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

var {Todo} = require('Todo');

describe("Individual Todo Tests", () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should dispatch toggle todo action on click', ()=> {
        var todoData = {
            id: 199,
            text: 'test',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(todo));


        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoData.id
        });    
    });
});