import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  Box,
  Button
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
    console.log(fields)
    this.props.onSuccess();
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

  render(): ReactNode {
    const {
      fields,
      classes: {
        formControl,
        formLabel,
        formHelperText,
        formBottomContainer
      }
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
          <Button onClick={this.onClick}>
            Save
          </Button>
        </Box>
      </form> 
    );
  } 
}

export default withStyles(styles)(Form);