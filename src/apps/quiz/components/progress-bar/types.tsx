import { FlashcardStatus } from "../flash-card/types";

export interface IOwnProps {
  currentQuestion: number,
  totalQuestion: number,
  flashcardStatus: FlashcardStatus,
  classes: {
    title: string,
    progressBarContainer: string,
    progressBar: string,
  }
}