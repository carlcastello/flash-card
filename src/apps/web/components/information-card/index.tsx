import React, { Component, ReactNode } from 'react';

import { Paper, Typography, Box, withStyles, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps } from './types';


class InformationCard extends Component<IOwnProps> {

  onDelete = (): void => {
    console.log('Delete')
  };

  onEdit = (): void => {
    console.log('Edit');
  };

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
        iconButton,
        iconButtonContainer
      }
    } = this.props;
    return (
      <Paper className={paperContainer} elevation={3}>
        <Box p={2}>
          {this.renderTitle()}
          <Box className={iconButtonContainer}>
            <IconButton className={iconButton} onClick={this.onEdit}>
              <Edit fontSize="inherit"/>
            </IconButton>
            <IconButton className={iconButton} onClick={this.onDelete}>
              <Delete fontSize="inherit"/>
            </IconButton>
          </Box>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(InformationCard);