import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch Tests', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
     it('should dispatch set search text on input change', () => {
        var searchText = 'Dog';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        }
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
     });
     it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
        var checked = true;
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

        todoSearch.refs.showCompleted.checked = checked;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(action);
     });
})