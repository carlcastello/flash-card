import { FlashCardStatus } from "../../types";

export interface IOwnProps {
  flashCardStatus: FlashCardStatus,
  submit: () => void,
  next: () => void,
  classes: {
    button: string
  }
}

export interface IOwnState {

}