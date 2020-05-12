import { FlashCardStatus } from "../../types";

export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IQuestionObject {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
}

export interface IOwnProps {
  flashCardStatus: FlashCardStatus,
  questionObject: IQuestionObject,
  onSkip: () => void,
  classes: {
    paper: string,
    boxButtonContainer: string,
    boxQuestionaireContainer: string
  }
}