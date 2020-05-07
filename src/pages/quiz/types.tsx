import { IFlashCard, FlashCardStatus } from "./components/flash-card/types";
import { QuizStatus } from "./enum";

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
  currentflashCardStatus: FlashCardStatus,
  quizStatus: QuizStatus
}