import React, { Component, ReactNode } from 'react';

import { Box, withStyles } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom';

import styles from './styles';
import { IOwnProps } from './types';

import Navbar from '../components/navbar';

import Dashboard from '../pages/dashboard';
import QuizSettings from '../pages/quiz';


class Router extends Component<IOwnProps> {

  renderPage = (): ReactNode => {
    return (
      <Box py={5}>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/dashboard/quiz' component={QuizSettings}/>
        <Route exact path='/dashboard/quiz/:quizId' component={QuizSettings}/>
      </Box>  
    );
  }

  render(): ReactNode {
    const {
      classes: {
        boxContainer
      }
    } = this.props;

    return(
      <Box className={boxContainer}>
        <BrowserRouter>
          <Navbar/>
          {this.renderPage()}
        </BrowserRouter>
      </Box>
    );
  }
}


export default withStyles(styles)(Router);
