import { IFlashCard, FlashCardStatus } from "./components/flash-card/types";

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
  currentflashCardStatus: FlashCardStatus
}