import { sneakersAndSocks } from '../types/sneakersAndSocks';
import { actionTypes } from './action.types';
import { reducerSneakers } from './reducer.sneakers';

describe('Given the function reducer.sneakers', () => {
    const sneakerAndSocksMokc: sneakersAndSocks = {
        id: 1,
        name: '',
        offer: false,
        price: 1,
        brand: '',
        color: '',
        image: '',
        Description: '',
    };
    let action: { type: string; payload: unknown };
    let state: Array<sneakersAndSocks>;

    describe('when action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.load,
                payload: [sneakerAndSocksMokc],
            };
            state = [];
        });
        test('then the returned state should be the action payload', () => {
            const result = reducerSneakers(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('when action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: sneakerAndSocksMokc,
            };
            state = [];
        });
        test('then the returned state should be the action payload', () => {
            const result = reducerSneakers(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe('when action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...sneakerAndSocksMokc, title: 'update' },
            };
            state = [sneakerAndSocksMokc];
        });
        test('then the returned state should be the action payload', () => {
            const result = reducerSneakers(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe('when action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: sneakerAndSocksMokc,
            };
            state = [sneakerAndSocksMokc];
        });
        test('then the returned state should be the action payload', () => {
            const result = reducerSneakers(state, action);
            expect(result).toEqual(state);
        });
    });
    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: {
                    ...sneakerAndSocksMokc,
                    id: '2',
                    title: 'Update',
                },
            };
            state = [sneakerAndSocksMokc];
        });
        test('Then the returned state should be the original state', () => {
            const result = reducerSneakers(state, action);
            expect(result).toEqual(state);
        });
    });
    describe('When the action is delete and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...sneakerAndSocksMokc, id: '2' },
            };
            state = [sneakerAndSocksMokc];
        });
        test('Then the returned state should should be the original state', () => {
            const result = reducerSneakers(state, action);
            expect(result).toEqual(state);
        });
    });
    describe('When the action is any other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [sneakerAndSocksMokc];
        });
        test('Then the returned state should be ...', () => {
            const result = reducerSneakers(state, action);
            expect(result).toEqual(state);
        });
    });
});
