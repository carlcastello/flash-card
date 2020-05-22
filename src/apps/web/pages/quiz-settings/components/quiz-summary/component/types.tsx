import { IQuizSummary } from '../../../../../../commons/types';


export interface IOwnProps {
  quizId?: string,
  quizSummary?: IQuizSummary,
  createQuizSummary: (quizSummary: IQuizSummary) => void,
  saveQuizSummary: (quizId: string, quizSummary: IQuizSummary) => void,
}