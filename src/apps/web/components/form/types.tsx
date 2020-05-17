export interface IField {
  id: string,
  label: string,
  type: string,
  helperText?: string,
  required?: boolean,
  validator?: (value: string) => string | boolean
}

interface IFieldValidation {
  value: string,
  error: string | boolean,
}

export interface IOwnState {
  fields: {
    [id: string]: IFieldValidation
  }
}

export interface IOwnProps {
  fields: IField[],
  onSuccess: () => void,
  classes: {
    formControl: string,
    formLabel: string,
    formInput: string,
    formHelperText: string,
    formBottomContainer: string
  }
}