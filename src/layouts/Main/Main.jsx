import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { CssBaseline, Box, Container, useMediaQuery } from '@material-ui/core';
import { Topbar, Footer } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: theme.spacing(12),
  },
  container: {
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();

  // Component States
  const [open, setOpen] = useState(true);
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const toggleSideByDevice = useCallback(() => {
    setOpen(isDesktop);
  }, [isDesktop]);

  useEffect(() => {
    toggleSideByDevice();
  }, [toggleSideByDevice]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Topbar handleDrawerOpen={handleDrawerOpen} open={open} />

      <main className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          {children}
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Main;
