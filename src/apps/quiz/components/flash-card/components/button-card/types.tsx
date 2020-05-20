import { FlashcardStatus } from "../../types";

export interface IOwnProps {
  flashcardStatus: FlashcardStatus,
  submit: () => void,
  next: () => void,
  classes: {
    button: string
  }
}

export interface IOwnState {

}