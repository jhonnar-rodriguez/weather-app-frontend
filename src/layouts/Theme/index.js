import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  spacing: 8,
  palette: {
    background: {
      default: '#222222',
    },
  },
});

export default theme;
