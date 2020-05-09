import { FlashCardStatus } from "../../types";

export interface IOwnProps {
  answer: string,
  flashCardStatus: FlashCardStatus,
  ref: any,
  classes: {
    paper: string,
    input: string,
    typography: string
  }
}

export interface IOwnState {
  answer: string
}