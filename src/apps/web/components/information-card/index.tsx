import React, { Component, ReactNode } from 'react';

import { Paper, Typography, Box, withStyles } from '@material-ui/core';

import styles from './styles';
import { IOwnProps } from './types';


class InformationCard extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      title,
      subtitle,
      description,
      classes: {
        inlineTypography,
        titleContainer,
        paperContainer
      }
    } = this.props;
    return (
      <Paper className={paperContainer}>
        <Box p={2}>
          <Box mb={1}>
            <Typography 
              variant="h5"
              className={inlineTypography}>
              {title}
            </Typography>
            {subtitle ? 
              <Typography
                variant="subtitle1"
                className={inlineTypography}>
                &nbsp;({subtitle})
              </Typography> :
              null}
          </Box>
          <Typography variant="body1">
            {description}
          </Typography>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(InformationCard);