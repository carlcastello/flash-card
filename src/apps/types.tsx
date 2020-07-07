import { IQuizSummary, IFlashcard, IQuizSummaryCard, IQuestionCard } from "./commons/types";


export interface IQuizAppState {
  pageData: IPageData
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

export interface IDashboardAppState {
  componentLoading: IComponentLoadingState,
  pageData: IPageData
}

export interface IReduxState {
  quizApp: IQuizAppState,
  dashboardApp: IDashboardAppState,
  api: string
}