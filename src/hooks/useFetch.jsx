import { useState, useEffect, useRef, useCallback } from 'react';

const useFetch = (fireSearch, setFireSearch, setError, input) => {
  const { city, metricSystem } = input;

  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const fetchWeather = useCallback(
    async () => {
      setState({
        data: null,
        loading: true,
        error: null,
      });

      const url = `${process.env.REACT_APP_BACKEND_URL}/weather`;
      const formParams = {
        city,
        metric: metricSystem,
      };

      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(formParams),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': process.env.REACT_APP_BACKEND_TOKEN,
        },
      })
        .then((resp) => resp.json())
        .then((weather) => {
          setFireSearch(false);
          // Will add the values to the state only if the component is mounted
          if (isMounted.current) {
            if (weather.success === false || Object.keys(weather.data).length === 0) {
              setError({
                display: true,
                message: `The city ${city} cannot be found, please try again.`,
                category: 'error',
              });
              return;
            }

            const { data } = weather;

            setState({
              loading: false,
              error: null,
              data,
              system: metricSystem,
            });
          }
        })
        .catch((error) => {
          console.log(`Something went wrong fetching the records. ${error}`);
          setFireSearch(false);

          setError({
            display: true,
            message: 'Something went wrong getting the weather data, please try again.',
            category: 'error',
          });

          setState({
            loading: false,
            data: null,
            error,
          });
        });
    },
    [city, metricSystem, setFireSearch, setError],
  );

  useEffect(() => {

    return () => {
      // Component unmounted
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {

    if (fireSearch) {
      fetchWeather();
    }

  }, [fireSearch, fetchWeather]);

  return state;
};

export default useFetch;
