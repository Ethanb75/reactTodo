import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
var {Provider} = require('react-redux');

var configureStore = require('configureStore');
import TodoApp from 'TodoApp';
import TodoList from 'TodoList'



describe("TodoApp Tests", () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    it('should render todo list', () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );
        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        expect(todoList.length).toEqual(1);
    });
});