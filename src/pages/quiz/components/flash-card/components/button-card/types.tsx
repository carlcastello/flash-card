import { FlashCardStatus } from "../../types";

export interface IOwnProps {
  flashCardStatus: FlashCardStatus,
  submit: () => void,
  next: () => void,
  classes: {
    button: string,
    correctButton: string,
    wrongButton: string, 
    hintButton: string
  }
}

export interface IOwnState {

}