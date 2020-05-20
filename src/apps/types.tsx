import { IQuizSummary } from "./commons/types";


export interface IQuizState {

}

export interface IPageData {
  createdQuizes: IQuizSummary[]
}

export interface IWebData {
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}