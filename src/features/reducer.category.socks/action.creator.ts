import { createAction } from '@reduxjs/toolkit';
import { sneakersAndSocks } from '../types/sneakersAndSocks';
import { actionTypes } from './action.types';

export const loadActionCreator = createAction<Array<sneakersAndSocks>>(
    actionTypes.load
);

export const addActionCreator = createAction<sneakersAndSocks>(actionTypes.add);

export const updateActionCreator = createAction<sneakersAndSocks>(
    actionTypes.update
);

export const deleteActionCreator = createAction<sneakersAndSocks['id']>(
    actionTypes.delete
);
