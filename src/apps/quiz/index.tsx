import React, { Component, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core';

import QuizRouter from './router';
import theme from './theme';

class Web extends Component {

  render(): ReactNode {
    return (
      <ThemeProvider theme={theme}>
        <QuizRouter/>
      </ThemeProvider>
    );
  }
}

export default Web;
