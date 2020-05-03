import { QuestionType } from "./components/question-card/types";

export enum FlashCardStatus {
  DEFAULT,
  CORRECT,
  WRONG,
  HINT
}


export interface IFlashCard {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IOwnProps {
  updateFlashCard: (flashCardStatus: FlashCardStatus) => void,
  nextFlashCard: () => void,
  flashCardObject: IFlashCard,
  classes: {

  }
}

export interface IOwnState {

}