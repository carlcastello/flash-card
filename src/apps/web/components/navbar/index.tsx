import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { withStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

import { IOwnProps } from './types';

import styles from './styles';


class Navbar extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      classes: {
        link,
      }
    } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <Link to='' className={link}>
              Flashcard
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);