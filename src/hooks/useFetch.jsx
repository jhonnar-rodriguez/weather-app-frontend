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

      const url = `${process.env.REACT_APP_BACKEND_URL}/data/2.5/find?q=${city}&units=${metricSystem}&mode=json&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`;

      await fetch(url)
        .then((resp) => resp.json())
        .then((weather) => {
          setFireSearch(false);
          // Will add the values to the state only if the component is mounted
          if (isMounted.current) {
            if (weather.count === 0 || parseInt(weather.cod, 10) === 404) {
              setError({
                display: true,
                message: `The city ${city} cannot be found, please try again.`,
                category: 'error',
              });
              return;
            }

            const { list } = weather;
            setState({
              loading: false,
              error: null,
              data: list[0],
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
