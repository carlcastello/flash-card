import { IQuiz } from "./commons/types";

export interface IQuizState {

}

export interface IPageData {
  createdQuizes: IQuiz[]
}

export interface IWebData {
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}