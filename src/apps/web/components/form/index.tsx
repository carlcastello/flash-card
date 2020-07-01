import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  Box,
  Button,
  LinearProgress
} from '@material-ui/core';

import styles from './styles';
import { IOwnProps, IField, IOwnState } from './types';


class Form extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    fields: {}
  }

  onInputChange = (id: string, validator?: (value: string) => string | boolean) => (event: any) => {
    const value = event.target.value;
    const error = validator ? validator(value) : false;
    this.setState((state) => ({
      fields: {...state.fields, [id]: {value, error}}
    }));
  }

  onClick = () => {
    const {
      fields,
    } = this.state

    this.props.onSuccess(
      Object.keys(fields).reduce(
        (prev, curr) => ({...prev, [curr]: fields[curr].value }),
        {}
      )
    );
  }

  renderInput({id, label, value, validator} : IField): ReactNode {
    const {
      props: {
        classes: {
          formInput
        }
      },
      state: {
        fields: stateFields
      }
    } = this;

    return (
      <OutlinedInput 
        className={formInput}
        id={id}
        label={label}
        value={id in stateFields ? stateFields[id].value : value }
        onChange={
          this.onInputChange(id, validator)
        }/>
    )
  }

  renderButton(): ReactNode {
    return (
      <Button onClick={this.onClick}>
        Save
      </Button>
    );
  }

  renderLoadingBar(): ReactNode {
    return (
      <Box mt={2} width="100%" flex flexDirection="row">
        <LinearProgress color="secondary"/>
      </Box>
    );
  }

  render(): ReactNode {
    const {
      isLoading,
      fields,
      classes: {
        formControl,
        formLabel,
        formHelperText,
        formBottomContainer      }
    } = this.props;
    const {
      fields: stateFields
    } = this.state;
  
    return (
      <form>
        {fields.map((field: IField, index: number) => 
          <FormControl 
            fullWidth
            variant="outlined"
            className={formControl}
            required={field.required}
            key={`form-${index}`}
            error={!!stateFields[field.id] && !!stateFields[field.id].error}>
            <InputLabel className={formLabel} htmlFor={field.id}>{field.label}</InputLabel>
            {this.renderInput(field)}
            {field.helperText ? 
              <FormHelperText className={formHelperText}>{field.helperText}</FormHelperText> :
               null
            }
            {stateFields[field.id] && stateFields[field.id].error ?
              <FormHelperText >{stateFields[field.id].error}</FormHelperText> :
              null
            }
          </FormControl>
        )}
        <Box className={formBottomContainer}>
          {isLoading ?
            this.renderLoadingBar() :
            this.renderButton()}
        </Box>
      </form> 
    );
  } 
}

export default withStyles(styles)(Form);