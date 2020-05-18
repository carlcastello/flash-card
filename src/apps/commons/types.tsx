
export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IFlashCard {
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IQuiz {
  title: string,
  description: string,
  flashcards: IFlashCard[]
}