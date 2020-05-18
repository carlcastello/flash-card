import { FlashCardStatus } from "./components/flash-card/types";
import { QuizStatus } from "./enum";
import { IFlashCard } from "../commons/types";

export interface IOwnProps {
  flashCards: IFlashCard[],
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
  currentFlashCardStatus: FlashCardStatus,
  quizStatus: QuizStatus
}