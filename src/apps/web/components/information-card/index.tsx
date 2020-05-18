import React, { Component, ReactNode } from 'react';

import { Paper, Typography, Box, withStyles, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps } from './types';


class InformationCard extends Component<IOwnProps> {

  renderTitle(): ReactNode {
    const {
      title,
      subtitle,
      classes: {
        inlineTypography,
      }
    } = this.props;
    return (
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
    );
  }

  render(): ReactNode {
    const {
      description,
      classes: {
        paperContainer,
        editIconButton
      }
    } = this.props;
    return (
      <Paper className={paperContainer}>
        <Box p={2}>
          {this.renderTitle()}
          <IconButton className={editIconButton}>
            <Edit fontSize="small"/>
          </IconButton>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(InformationCard);