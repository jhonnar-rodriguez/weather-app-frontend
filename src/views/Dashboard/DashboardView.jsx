import React from 'react';
import {
  Grid,
} from '@material-ui/core';

const DashboardView = () => {

  return (
    <Grid
      container
      spacing={3}
      style={{
        minHeight: '80vh',
        color: 'white',
      }}
    >
      <h1>Weather Dashboard</h1>
    </Grid>
  );
};

export default DashboardView;
