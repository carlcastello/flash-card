import { IFlashCard } from "./components/flash-card/types";

export interface IOwnProps {
  flashCards: IFlashCard[],
  classes: {
    boxContent: string,
    boxContainer: string,
  }
}

export interface IOwnState {
  questionIndex: number
}