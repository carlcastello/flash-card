import { IQuizSummary } from '../../../../../commons/types';


export interface IOwnProps {
  quizId?: string,
  quizSummary?: IQuizSummary,
  onCreateQuizSummary: (quizSummary: IQuizSummary) => void,
  onSaveQuizSummary: (quizId: string, quizSummary: IQuizSummary) => void,
}