import { QuestionType } from "./components/question-card/types";

export enum FlashCardStatus {
  DEFAULT = "DEFAULT",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  HINT = "HINT"
}


export interface IFlashCard {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IOwnProps {
  update: (flashCardStatus: FlashCardStatus) => void,
  next: () => void,
  flashCardObject: IFlashCard,
  classes: {

  }
}

export interface IOwnState {
  flashCardStatus: FlashCardStatus
}