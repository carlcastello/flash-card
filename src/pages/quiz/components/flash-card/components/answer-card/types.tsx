import { FlashCardStatus } from "../../types";

export interface IOwnProps {
  flashCardStatus: FlashCardStatus,
  ref: any,
  classes: {
    paper: string,
    input: string,
  }
}

export interface IOwnState {
  answer: string
}