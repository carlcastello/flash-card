import React, { Component, ReactNode } from 'react';

import { Paper, Typography, Box, withStyles, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps } from './types';


class InformationCard extends Component<IOwnProps> {

  onDeleteIconClick = (): void => {
    const {
      id,
      onDelete
    } = this.props;
    onDelete(id);
  };

  onEditIconClick = (): void => {
    const {
      id,
      onEdit
    } = this.props;
    onEdit(id);
  };

  renderButtons(): ReactNode {
    const {
      classes: {
        iconButton,
        iconButtonContainer
      }
    } = this.props;
    return (
      <Box className={iconButtonContainer}>
        <IconButton className={iconButton} onClick={this.onEditIconClick}>
          <Edit fontSize="inherit"/>
        </IconButton>
        <IconButton className={iconButton} onClick={this.onDeleteIconClick}>
          <Delete fontSize="inherit"/>
        </IconButton>
      </Box>
    );
  }

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
        paperContainer
      }
    } = this.props;
    return (
      <Paper className={paperContainer} elevation={3}>
        <Box p={2}>
          {this.renderTitle()}
          {this.renderButtons()}
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(InformationCard);