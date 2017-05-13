import {
    todo
} from './todoReducers.js'
describe('application logic', () => {
    it('add todo entry', () => {
        const action = {
            type: 'ADD_TODO',
            id: 1,
            text: 'test redux'
        }
        const stateBefore = [];
        const stateAfter = [{
            id: 1,
            text: 'test redux'
        }]
        expect(todo(stateBefore, action)).toEqual(stateAfter);
    })

    it('delete todo entry', () => {
        const action = {
            type: 'DELETE_TODO',
            id: 1,
        }
        const stateBefore = [{
            id: 1,
            text: 'test redux'
        }];
        const stateAfter = [];
        expect(todo(stateBefore, action)).toEqual(stateAfter);
    })

    it('toggle todo', () => {
        const action = {
            type: 'TOGGLE',
            id: 1
        };
        const stateBefore = [{
            id: 1,
            text: 'test redux',
            toggle: false,
        }];
        const stateAfter = [{
            id: 1,
            text: 'test redux',
            toggle: true
        }]

        expect(todo(stateBefore, action)).toEqual(stateAfter);
    })
})