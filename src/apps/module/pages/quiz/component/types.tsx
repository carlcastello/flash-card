import { FlashcardStatus } from "../../../components/flash-card/types";
import { QuizStatus } from "./enum";
import { IQuestionCard } from "../../../../commons/types";

export interface IOwnProps {
  questions: IQuestionCard[]
  classes: {
    boxContent: string,
    boxContainer: string,
    progressBarContainer: string,
    iconButton: string
  }
}

export interface IOwnState {
  questionIndex: number,
  progressIndex: number,
  currentFlashcardStatus: FlashcardStatus,
  quizStatus: QuizStatus
}