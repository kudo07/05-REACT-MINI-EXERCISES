import { useEffect, useReducer, useState } from 'react';
const ACTIONS = {
  FETCH_START: 'FETCH START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        data: undefined,
        isError: false,
        isLoading: true,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        data: payload.data,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      throw Error('new error');
    // return state;
  }
}
export function useFetch(url, options = {}) {
  cosnt[(state, dispatch)] = useReducer(reducer, {
    isError: false,
    isLoading: true,
  });
  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START });
    const controller = new AbortController();
    fetch(url, { signal: controller.signal, ...options })
      // the option is in {} we use outer

      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data } });
      })
      .catch((e) => {
        if (e.name === 'AbortError')
          return dispatch({ type: ACTIONS.FETCH_ERROR, payload: { error: e } });
      });

    return () => {
      controller.abort();
    };
  }, [url]);
  return state;
}
// we use the abort controller bcz when we click btw the options the
// data shown previous first then the click one and then show the previous data
// on top and then actual click
// to avoid this
