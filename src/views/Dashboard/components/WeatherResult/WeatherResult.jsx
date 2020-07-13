import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    borderRadius: 25,
  },
  infoDiv: {
    marginTop: theme.spacing(1.6),
    '& > legend': {
      color: '#0a97b0',
      fontSize: '13px',
    },
    '& > p': {
      fontWeight: 'bold',
      fontSize: '14px',
    },
  },
}));

const WeatherResult = (props) => {
  const classes = useStyles();
  const { results: { data } } = props;
  const { name, main: { temp }, coord: { lat, lon }, sys: { country }, wind: { speed }, weather } = data;

  return (
    <Grid
      item
      xs={12}
      md={6}
    >
      <Card className={classes.root}>
        <CardHeader
          title='Weather Forecast'
          subheader={`${name}'s weather is ${weather[0].description}`}
        />
        <CardContent>
          <div
            className={classes.infoDiv}
          >
            <FormLabel component='legend'>
              Country
            </FormLabel>
            <Typography
              component='p'
              variant='subtitle1'
              display='block'
            >
              {country}
            </Typography>
          </div>
          <div
            className={classes.infoDiv}
          >
            <FormLabel component='legend'>
              Latitude
            </FormLabel>
            <Typography
              component='p'
              variant='subtitle1'
              display='block'
            >
              {lat}
            </Typography>
          </div>
          <div
            className={classes.infoDiv}
          >
            <FormLabel component='legend'>
              Longitude
            </FormLabel>
            <Typography
              component='p'
              variant='subtitle1'
              display='block'
            >
              {lon}
            </Typography>
          </div>
          <div
            className={classes.infoDiv}
          >
            <FormLabel component='legend'>
              Current Weather
            </FormLabel>
            <Typography
              component='p'
              variant='subtitle1'
              display='block'
            >
              {temp}
            </Typography>
          </div>
          <div
            className={classes.infoDiv}
          >
            <FormLabel component='legend'>
              Wind Speed
            </FormLabel>
            <Typography
              component='p'
              variant='subtitle1'
              display='block'
            >
              {speed}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

WeatherResult.propTypes = {
  results: PropTypes.object.isRequired,
};

export default WeatherResult;
