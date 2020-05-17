import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import WebsiteTheme from './themes/websiteTheme';
import QuizTheme from './themes/quizTheme';

// import Navbar from './apps/web/components/navbar';
// import Dashboard from './apps/web/pages/dashboard';

import WebPage from './apps/web'

const App: React.FC = () => {
  const hello: boolean = false;
  return (
    <ThemeProvider theme={hello ? QuizTheme: WebsiteTheme}>
      <WebPage/>
    </ThemeProvider>
  );
}

export default App;
