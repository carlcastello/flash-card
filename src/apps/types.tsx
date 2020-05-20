import { IQuizSummary, IQuiz, IFlashcard } from "./commons/types";


export interface IQuizState {

}

export interface IPageData {
  createdQuizes?: IQuizSummary[],

  // Quiz Setting
  title?: string,
  description?: string,
  flashcards?: IFlashcard[],
}

export interface IWebData {
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}