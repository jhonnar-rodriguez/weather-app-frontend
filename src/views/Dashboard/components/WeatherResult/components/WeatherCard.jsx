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
    marginTop: theme.spacing(1.5),
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

const WeatherCard = (props) => {
  const classes = useStyles();
  const { data } = props;
  const {
    lat,
    lon,
    city,
    temp,
    country,
    windSpeed,
    weatherDescription,
  } = data;

  return (
    <Grid
      item
      xs={12}
      sm={3}
    >
      <Card className={classes.root}>
        <CardHeader
          title='Weather Forecast'
          subheader={`${city}'s weather is ${weatherDescription}`}
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
              {' '}
              <span>&#x2103;</span>
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
              {windSpeed}
              {' '}
              MPH
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeatherCard;

