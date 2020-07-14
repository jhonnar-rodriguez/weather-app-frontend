import React, { useState } from 'react';
import {
  Grid,
} from '@material-ui/core';
import WeatherForm, { WeatherResult } from './components';
import useForm from '../../hooks';
import useFetch from '../../hooks/useFetch';

const DashboardView = () => {

  const [searchParams, handleInputChange] = useForm({
    city: '',
    metricSystem: '',
  });

  const [fireSearch, setFireSearch] = useState(false);
  const [error, setError] = useState(false);
  const weatherResults = useFetch(fireSearch, setFireSearch, setError, { ...searchParams });

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{
          minHeight: '80vh',
          color: 'white',
          flexGrow: 1,
        }}
      >
        <Grid item xs={12} sm={4}>
          <WeatherForm
            error={error}
            setError={setError}
            fireSearch={fireSearch}
            searchParams={searchParams}
            setFireSearch={setFireSearch}
            handleInputChange={handleInputChange}
          />
        </Grid>

        {
          weatherResults.data !== null && Object.keys(weatherResults.data).length && (
            <WeatherResult
              results={weatherResults}
            />
          )
        }

      </Grid>
    </>
  );
};

export default DashboardView;
