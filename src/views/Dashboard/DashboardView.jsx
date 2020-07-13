import React, { useState } from 'react';
import {
  Grid,
} from '@material-ui/core';
import WeatherForm from './components';
import useForm from '../../hooks';

const DashboardView = () => {

  const [searchParams, handleInputChange] = useForm({
    city: '',
    metricSystem: '',
  });

  const [fireSearch, setFireSearch] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Grid
      container
      spacing={3}
      style={{
        minHeight: '80vh',
        color: 'white',
      }}
    >
      <WeatherForm
        error={error}
        setError={setError}
        fireSearch={fireSearch}
        searchParams={searchParams}
        setFireSearch={setFireSearch}
        handleInputChange={handleInputChange}
      />
    </Grid>
  );
};

export default DashboardView;
