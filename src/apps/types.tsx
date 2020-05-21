import { IQuizSummary, IQuiz, IFlashcard } from "./commons/types";


export interface IQuizState {

}

export interface IComponentLoadingState {
  [componentName: string]: boolean,
}


export interface IPageData {
  createdQuizes?: IQuizSummary[],

  // Quiz Setting
  quizSummary?: IQuizSummary,
  quizQuestions?: {
    flashcards: IFlashcard[],    
  }
}

export interface IWebData {
  componentLoading: IComponentLoadingState,
  pageData: IPageData
}

export interface IReduxState {
  quiz: IQuizState,
  web: IWebData
}