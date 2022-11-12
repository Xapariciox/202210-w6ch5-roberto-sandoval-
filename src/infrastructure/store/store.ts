import { configureStore } from '@reduxjs/toolkit';
import { reducerSneakers } from '../../features/reducer.category.sneakers/reducer.sneakers';
import { reducerSocks } from '../../features/reducer.category.socks/reducer.socks';

export const appStore = configureStore({
    reducer: {
        sneakers: reducerSneakers,
        socks: reducerSocks,
    },
});

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
