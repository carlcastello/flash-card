import React, { Component, ReactNode } from 'react';
import Router from './router';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

class Web extends Component {
  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    );
  }
}

export default Web;
