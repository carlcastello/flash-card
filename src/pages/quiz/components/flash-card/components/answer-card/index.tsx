import React, { Component, ReactNode, ChangeEvent } from 'react';

import { withStyles, Paper, Input, Box, Button, Typography } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';


class AnswerCard extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    answer: ''
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({answer: event.target.value})
  }

  onClick = (event: any): void => {
    event.preventDefault();
    this.props.onSubmit(this.state.answer);
  }

  renderInput(): ReactNode {
    const {
      classes: {
        paper,
        input,
      }
    } = this.props;

    return (
      <Paper className={paper} elevation={3}>
        <Box p={2.5}>
          <Input 
            className={input}
            margin='none'
            onChange={this.onInputChange}
            disableUnderline
            fullWidth/>
        </Box>
      </Paper>
    );
  }

  renderButton(): ReactNode {
    const {
      classes: {
        button
      }
    } = this.props;

    return (
      <Box pt={2.5}>
        <Paper elevation={3}>
          <Button className={button} onClick={this.onClick} type="submit">
            <Typography variant="h6">
              Submit
            </Typography>
          </Button>
        </Paper>
      </Box>
    )
  }

  render(): ReactNode {
    return (
      <form>
        {this.renderInput()}
        {this.renderButton()}
      </form>
    )
  }
}

export default withStyles(styles)(AnswerCard);