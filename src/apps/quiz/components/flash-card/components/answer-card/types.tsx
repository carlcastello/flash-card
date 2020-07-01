import { FlashcardStatus } from "../../types";

export interface IOwnProps {
  answer: string,
  flashcardStatus: FlashcardStatus,
  ref: any,
  classes: {
    paper: string,
    input: string,
    typography: string
  }
}

export interface IOwnState {
  answer: string,
  hideAnswer: boolean,
}