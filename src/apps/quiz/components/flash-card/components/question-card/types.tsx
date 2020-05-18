import { FlashCardStatus } from "../../types";
import { QuestionType } from "../../../../../commons/types";

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