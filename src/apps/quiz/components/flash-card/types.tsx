import { IFlashcard } from "../../../commons/types";

export enum FlashcardStatus {
  DEFAULT = "DEFAULT",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  HINT = "HINT"
}

export interface IOwnProps {
  update: (flashcardStatus: FlashcardStatus) => void,
  next: () => void,
  flashcardObject: IFlashcard,
  classes: {

  }
}

export interface IOwnState {
  flashcardStatus: FlashcardStatus
}