import { FlashcardStatus } from "../../../components/flash-card/types";
import { QuizStatus } from "./enum";
import { IFlashcard } from "../../../../commons/types";

export interface IOwnProps {
  flashcards: IFlashcard[],
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