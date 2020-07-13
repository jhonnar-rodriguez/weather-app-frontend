import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  link: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Footer = (props) => {
  const { className } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <Typography variant='body1'>
        &copy;
        {' '}
        <Link
          component='a'
          href='https://co.linkedin.com/in/jhonnar-rodriguez'
          target='_blank'
          className={classes.link}
        >
          Weather App
        </Link>
        .
        {' '}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant='caption'>
        Developed By Jhonnar Rodriguez
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
