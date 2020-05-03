export interface IOwnProps {
  onSubmit: (answer: string) => void,
  classes: {
    paper: string,
    input: string,
    button: string
  }
}

export interface IOwnState {
  answer: string
}