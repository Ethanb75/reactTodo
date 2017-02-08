import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe("TodoApp Tests", () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
});