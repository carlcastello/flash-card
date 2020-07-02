import { IQuestionCard } from "../../../commons/types";

export enum FlashcardStatus {
  DEFAULT = "DEFAULT",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  HINT = "HINT"
}

export interface IOwnProps {
  update: (flashcardStatus: FlashcardStatus) => void,
  next: () => void,
  question: IQuestionCard,
  classes: {

  }
}

export interface IOwnState {
  flashcardStatus: FlashcardStatus
}