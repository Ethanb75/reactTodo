var {Provider} = require('react-redux');
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe("TodoList Tests", () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item',() => {
       //dumb data
        var todos =[
            {
                id: 1,
                text: 'chase dingos',
                completed: false,
                completedAt: undefined,
                time: 500
            },
            {
                id: 2,
                text: 'leave Australia',
                completed: false,
                completedAt: undefined,
                time: 500
            }
        ];
        var store = configure({
            todos 
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList />  
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        //stores all components after rendering the list
        //scryRenderedComponentsWithType returns the number of components under the todolist component
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
        expect(todosComponents.length).toBe(todos.length);
    });
});