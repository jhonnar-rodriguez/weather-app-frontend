import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import Notification from '../../../../components/Notification/Notification';

const metricSystemOptions = [
  {
    value: '',
    label: 'Select your metrict system',
  },
  {
    value: 'imperial',
    label: 'Imperial',
  },
  {
    value: 'metric',
    label: 'Metric',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    borderRadius: 25,
  },
  mt: {
    marginTop: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const WeatherForm = (props) => {
  const classes = useStyles();
  const { searchParams, handleInputChange, fireSearch, setFireSearch, error, setError } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchParams.city.trim() === '' || searchParams.metricSystem.trim() === '') {
      setError({
        display: true,
        message: 'All fields are required, please validate',
        category: 'error',
      });

      setFireSearch(false);

      return;
    }

    setError({
      display: false,
      message: '',
      category: '',
    });

    setFireSearch(true);
  };
  const { city, metricSystem } = searchParams;

  return (
    <Grid
      item
      xs={12}
      md={6}
    >
      {
        typeof error !== 'undefined' && error.display && (
          <Box m={2}>
            <Notification
              setError={setError}
              message={error.message}
              category={error.category}
            />
          </Box>
        )
      }
      <Card className={classes.root}>
        <CardHeader
          title='Know the weather'
          subheader='Please choose your city and the metric system to begin the search...'
        />
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
          >
            <FormControl
              fullWidth
            >
              <TextField
                name='city'
                label='City'
                margin='normal'
                value={city || ''}
                onChange={handleInputChange}
                autoComplete='off'
                required
                fullWidth
                autoFocus
              />
            </FormControl>

            <FormControl
              className={classes.mt}
              fullWidth
            >
              <InputLabel
                htmlFor='metricSystem'
              >
                Metric System
              </InputLabel>
              <Select
                name='metricSystem'
                value={metricSystem || ''}
                onChange={handleInputChange}
                inputProps={{ 'aria-label': 'Metric System' }}
                fullWidth
              >
                {metricSystemOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <div className={classes.wrapper}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={fireSearch}
                fullWidth
                className={classes.button}
              >
                Get Forecast
              </Button>
              {fireSearch && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>

          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

WeatherForm.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  setError: PropTypes.func.isRequired,
  fireSearch: PropTypes.bool.isRequired,
  searchParams: PropTypes.object.isRequired,
  setFireSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default WeatherForm;
