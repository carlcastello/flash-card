import { IQuizSummary, IFlashcard, IQuizSummaryCard, IQuestionCard } from "./commons/types";


export interface IModuleState {
  pageData: Object
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
  module: IModuleState,
  web: IWebData
}