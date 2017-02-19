import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

var {AddTodo} = require('AddTodo')

describe('AddTodo tests', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should dispatch ADD_TODO with valid data', () => {
        var todo = 'thar';
        var action = {
            type: 'ADD_TODO',
            text: todo
        }
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todo;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
    it('should not dispatch addTodo with invalid data', () => {
        var todo = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todo;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});