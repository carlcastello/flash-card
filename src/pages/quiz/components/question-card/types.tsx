export enum QuestionCardType {
  WORD,
  QUESTIONAIRE 
}

export interface IWordObject {
  word: string,
  classification: string,
  hint?: string
}

export interface IQuestionObject {
  question: string,
  hint?: string,
}

export interface IOwnProps {
  flashCardType: QuestionCardType,
  questionObject?: IQuestionObject,
  wordObject?: IWordObject,
  classes: {
    paper: string
  }
}