import { IFlashCard } from "../../../commons/types";

export enum FlashCardStatus {
  DEFAULT = "DEFAULT",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  HINT = "HINT"
}

export interface IOwnProps {
  update: (flashCardStatus: FlashCardStatus) => void,
  next: () => void,
  flashCardObject: IFlashCard,
  classes: {

  }
}

export interface IOwnState {
  flashCardStatus: FlashCardStatus
}