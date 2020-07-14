import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './components/WeatherCard';

const WeatherResult = (props) => {
  const { results: { data } } = props;

  return (
    <>
      {
        data.map((weather) => (
          <WeatherCard
            key={weather.lat}
            data={weather}
          />
        ))
      }
    </>
  );
};

WeatherResult.propTypes = {
  results: PropTypes.object.isRequired,
};

export default WeatherResult;
