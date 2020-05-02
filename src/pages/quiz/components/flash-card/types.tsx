export enum EFlashCardType {
  WORD,
  QUESTIONAIRE 
}

export interface IOwnProps {
  flashCardType: EFlashCardType,
  classes: {
    paper: string
  }
}