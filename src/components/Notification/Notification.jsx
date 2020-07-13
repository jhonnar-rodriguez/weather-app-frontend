import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  ul: {
    listStyle: 'none',
  },
}));

const Alert = (props) => {
  const { severity, children, direction, style } = props;

  return (
    <MuiAlert
      elevation={6}
      variant='filled'
      severity={severity}
      direction={direction}
      style={style}
    >
      {children}
    </MuiAlert>
  );
};

const renderRow = (messages, classes) => {
  let index = 0;
  return Array.isArray(messages) === true ? (
    <>
      <ul className={classes.ul}>
        {messages.map((msg) => {
          index++;
          return (
            <li key={index}>
              {msg}
            </li>
          );
        })}
      </ul>
    </>
  ) : (messages);
};

const Notification = (props) => {
  const classes = useStyles();
  const { message, category, setError, duration = 6000 } = props;
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  return (
    <div className={classes.root} m={2}>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={duration}
      >
        <Alert severity={`${category}`}>
          {renderRow(message, classes)}
        </Alert>
      </Snackbar>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  category: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Notification;
