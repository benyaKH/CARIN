import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState , useGlobalState } = createGlobalState({
    mode: 'start',
});

export { setGlobalState, useGlobalState };