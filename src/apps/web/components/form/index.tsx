import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  FormControl,
  Input,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  Box
} from '@material-ui/core';

// import Button from '../buttons';
// import { IVariant, IPadding } from '../buttons/types';
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

  render(): ReactNode {
    const {
      fields,
      classes: {
        formControl,
        formLabel,
        formInput,
        formHelperText,
        formBottomContainer
      }
    } = this.props;
    const {
      fields: stateFields
    } = this.state
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
            <OutlinedInput  className={formInput} id={field.id} label={field.label} onChange={
              this.onInputChange(field.id, field.validator)
            }/>
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
          {/* <Button padding={IPadding.MEDIUM} variant={IVariant.PRIMARY} onClick={this.onClick}>
            Submit
          </Button> */}
        </Box>
      </form> 
    );
  } 
}

export default withStyles(styles)(Form);