import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import AppTheme from './app-theme';

import Page from './pages';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Page/>
    </ThemeProvider>
  );
}

export default App;
