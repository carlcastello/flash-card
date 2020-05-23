import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';

import styles from './styles';


class Navbar extends Component<IOwnProps, IOwnState> {
  render(): ReactNode {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <Link to=''>
              Flashcard
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);