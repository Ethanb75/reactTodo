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
});