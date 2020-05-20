import { IQuizSummary, IQuiz, IFlashCard } from "./commons/types";


export interface IQuizState {

}

export interface IPageData {
  createdQuizes?: IQuizSummary[],

  // Quiz Setting
  title?: string,
  description?: string,
  flashCards?: IFlashCard[],
}

export interface IWebData {
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}