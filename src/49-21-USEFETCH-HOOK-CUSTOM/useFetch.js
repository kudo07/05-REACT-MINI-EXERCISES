import { useEffect, useState } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);
    const controller = new AbortController();
    fetch(url, { signal: controller.signal, ...options })
      // the option is in {} we use outer

      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then(setData)
      .catch((e) => {
        if (e.name === 'AbortError') return;
        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isError, isLoading };
}
// we use the abort controller bcz when we click btw the options the
// data shown previous first then the click one and then show the previous data
// on top and then actual click
// to avoid this
