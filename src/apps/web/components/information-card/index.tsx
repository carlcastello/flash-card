import React, { Component, ReactNode, MouseEvent } from 'react';

import { Paper, Typography, Box, withStyles, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';


export class InformationCard extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    paperElevation: 3,
  }

  onDeleteIconClick = (event: MouseEvent): void => {
    const {
      id,
      onDelete
    } = this.props;

    event.stopPropagation();
    onDelete(id);
  };

  onEditIconClick = (event: MouseEvent): void => {
    const {
      id,
      onEdit
    } = this.props;

    event.stopPropagation();
    onEdit(id);
  };

  onMouseHoverAction = (paperElevation: number) => (): void => {
    const {
      hasHoverEffect
    } = this.props;

    if (hasHoverEffect) {
      this.setState({ paperElevation });
    }
  }

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
      props: {
        description,
        children,
        onClick,
        classes: {
          paperContainer
        }
      },
      state: {
        paperElevation
      }
    } = this;
    return (
      <Paper
        className={paperContainer}
        elevation={paperElevation}
        onClick={onClick}
        onMouseOver={this.onMouseHoverAction(6)}
        onMouseOut={this.onMouseHoverAction(3)}>
        <Box p={2}>
          {this.renderTitle()}
          {this.renderButtons()}
          <Typography variant="body2">
            {description}
          </Typography>
          {children}
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(InformationCard);