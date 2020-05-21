import { FlashcardStatus } from "../../types";
import { QuestionType } from "../../../../../commons/types";

export interface IQuestionObject {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
}

export interface IOwnProps {
  flashcardStatus: FlashcardStatus,
  questionObject: IQuestionObject,
  onSkip: () => void,
  classes: {
    paper: string,
    boxButtonContainer: string,
    boxQuestionaireContainer: string
  }
}