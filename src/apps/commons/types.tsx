export enum QuestionType {
  WORD,
  QUESTIONAIRE 
}

export interface IFlashcard {
  id: string,
  question: string,
  subQuestion?: string,
  hint?: string,
  questionType: QuestionType,
  answer: string,
}

export interface IQuiz {
  id: string,
  title: string,
  description: string,
  flashcards: IFlashcard[]
}

export interface IQuizSummary {
  id: string,
  title: string,
  description: string
} 