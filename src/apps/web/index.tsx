import React, { Component, ReactNode } from 'react';
import { ThemeProvider, Box, withStyles } from '@material-ui/core';

import Navbar from './components/navbar';

import WebRouter from './router';
import theme from './theme';
import styles from './styles';

class Web extends Component {

  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar/>
          <Box py={5}>
            <WebRouter/>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Web);
