import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import { Box, withStyles, Typography } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom';

import styles from './styles';
import { IOwnProps } from './types';

import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import QuizSettings from './pages/quiz-settings';
import { IReduxState } from '../types';
import { isFullPageLoading } from './common/selectors';


class Web extends Component<IOwnProps> {

  renderPage = (): ReactNode => {
    return (
      <Box py={5}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard/quiz" component={QuizSettings}/>
          <Route exact path="/dashboard/quiz/:quizId" component={QuizSettings}/>
        </BrowserRouter>
      </Box>  
    );
  }

  renderLoading = () => {
    return (
      <Typography>
        Hello World
      </Typography>
    );
  }

  render(): ReactNode {
    const {
      isFullPageLoading,
      classes: {
        boxContainer
      }
    } = this.props;

    return(
      <Box className={boxContainer}>
        <Navbar/>
        {isFullPageLoading ? this.renderLoading() : this.renderPage()}
      </Box>
    );
  }
}


const mapStateToProps = (state: IReduxState) => ({
  isFullPageLoading: isFullPageLoading(state)
})


export default connect(
  mapStateToProps
)(withStyles(styles)(Web));
