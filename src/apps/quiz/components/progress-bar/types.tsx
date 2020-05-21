import { FlashCardStatus } from "../flash-card/types";

export interface IOwnProps {
  currentQuestion: number,
  totalQuestion: number,
  flashCardStatus: FlashCardStatus,
  classes: {
    title: string,
    progressBarContainer: string,
    progressBar: string,
  }
}