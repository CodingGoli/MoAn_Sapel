import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

export function usePersistedState(key, defaultValue) {
    const [state, setState] = useState();

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const initialState = (isBrowser && JSON.parse(localStorage.getItem(key))) || defaultValue;
        setState(initialState);
    }, []);
    /* eslint-enable react-hooks/exhaustive-deps */

    useEffect(() => {
        if (isBrowser && state) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [key, state]);

    return [state || defaultValue, setState];
}