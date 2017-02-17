var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', ()=> {
    describe('Search text reducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'wow'
            };
            var res = reducers.searchTextReducer(df(''),df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('Toggle show completed reducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(false),df(action));
            expect(res).toEqual(true);
        });
    })
});