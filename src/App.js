import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Theme, Main } from './layouts';
import './assets/styles/app.css';
import AppRouter from './router';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Main>
        <AppRouter />
      </Main>
    </ThemeProvider>
  );
}

export default App;
