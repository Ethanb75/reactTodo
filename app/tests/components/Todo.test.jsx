import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Todo from 'Todo';

describe("Individual Todo Tests", () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should call onToggle prop with id on click', ()=> {
        var todoData = {
            id: 199,
            text: 'test',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />)
        var $el = $(ReactDOM.findDOMNode(todo));


        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);    
    });
});