import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe("TodoList Tests", () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item',() => {
       //dumb data
        var todos =[
            {
                id: 1,
                text: 'chase dingos'
            },
            {
                id: 2,
                text: 'leave Australia'
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        //stores all components after rendering the list
        //scryRenderedComponentsWithType returns the number of components under the todolist component
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(todos.length);
    });
});