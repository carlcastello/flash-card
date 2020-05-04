export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IQuestionObject {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
}

export interface IOwnProps {
  questionObject: IQuestionObject
  classes: {
    paper: string,
    boxButtonContainer: string,
    boxQuestionaireContainer: string
  }
}