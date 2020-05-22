import { IQuizSummary } from '../../../../commons/types';
import { RouteComponentProps } from 'react-router-dom';


export interface IOwnProps extends RouteComponentProps<any>{
  requiredData: string[],
  quizSummary?: IQuizSummary,
  fetchQuiz: (quizId: string) => void,
  saveQuizSummary: () => void,
  saveCreatedQuestion: () => void,
  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
  hasQuestionForm: boolean
}