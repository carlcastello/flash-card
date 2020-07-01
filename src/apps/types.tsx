import { IQuizSummary, IFlashcard, IQuizSummaryCard, IQuestionCard } from "./commons/types";


export interface IQuizState {

}

export interface IComponentLoadingState {
  [componentName: string]: boolean,
}


export interface IPageData {
  createdQuizes?: IQuizSummaryCard[],

  // Quiz Setting
  id?: string,
  quizSummary?: IQuizSummary,
  quizQuestions?: IQuestionCard[],
}

export interface IWebData {
  componentLoading: IComponentLoadingState,
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}